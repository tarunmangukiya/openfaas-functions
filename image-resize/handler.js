"use strict"

const Url = require('url');
const path = require('path');
const request = require('request');
const sharp = require('sharp');

module.exports = (event, context) => {
  const url = event.query.url;
  
  if (url) {
    const pathname = Url.parse(url).pathname;
    const extension = path.extname(pathname);
    const name = event.query.name ? (event.query.name + extension) : path.basename(pathname);
    const download = Boolean(event.query.download) || false
    const fit = event.query.fit || 'inside'
    
    const headers = [];
    headers['Cache-Control'] = 'public, max-age=2592000';
    headers['Expires'] = new Date(Date.now() + 2592000000).toUTCString();

    if (download) {
      headers['content-disposition'] = `attachment; filename="${name}"`;
    } else {
      headers['content-disposition'] = `inline; filename="${name}"`;
    }

    request.get({
      url,
      encoding: null
    }, (error, response, body) => {
      if (error) {
        context.fail(error);
      } else {
        headers['Content-Type'] = response.headers['content-type'];

        // If the file is Image
        // And has to be resized
        if ((event.query.width || event.query.height) && (extension === '.png' || extension === '.jpg' || extension === '.jpeg')) {
          const width = event.query.width ? Number(event.query.width) : null;
          const height = event.query.height ? Number(event.query.height) : null;

          const image = sharp(body);
          image.resize(width, height, { fit }).toBuffer().then((buffer) => {

            context
              .status(200)
              .headers(headers)
              .succeed(buffer);
          })
          .catch(error => {
            context.fail(error);
          });
        } else {
          context
            .status(200)
            .headers(headers)
            .succeed(body);
        }
      }
    })
  }
}
