'use strict';

var Site = require('dw/system/Site');
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');
var ImageTransformation = require('~/cartridge/experience/utilities/ImageTransformation.js');

/**
 * Render logic for the assets.headlinebanner.
 */
module.exports.render = function (context) {
    var imagesPref = null; //JSON.parse(Site.current.getCustomPreferenceValue('disConfiguration'));
    imagesPref = imagesPref ? imagesPref.teaser : null;
    var model = new HashMap();
    var content = context.content;

    if (content.addClass) {
        model.addClass = content.addClass;
    }

    // image details
    if (content.image) {
        model.image = {
            src: {
                desktop: ImageTransformation.url(content.image, {
                    device: 'desktop',
                    teaser: imagesPref
                })
            },
        };
        model.alt_desktop =  content.alt_desktop
    }
    if (content.mobileImage) {
        model.mobileImage = {
            src: {
                mobile: ImageTransformation.url(content.mobileImage, {
                    device: 'mobile',
                    teaser: imagesPref
                }),
            },
        };
        model.alt_mobile = content.alt_mobile;
    }

     // CTA content details
     if (content.cta_label) {
        model.cta_label = content.cta_label;
    }

    if (content.cta_link) {
        model.cta_link = content.cta_link;
    }

    // text content details
    if (content.slideCaption) {
        model.slideCaption = content.slideCaption;
    }

    return new Template('experience/components/assets/slickSlide').render(model).text;
};
