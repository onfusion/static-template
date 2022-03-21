"use strict";

var Template = require("dw/util/Template");
var HashMap = require("dw/util/HashMap");
var PageRenderHelper = require("~/cartridge/experience/utilities/PageRenderHelper.js");

module.exports.render = function (context) {
	var model = new HashMap();
	var component = context.component;
	var content = context.content;

	// automatically register configured regions
	model.regions = PageRenderHelper.getRegionModelRegistry(component);

	if (content.addClass) {
		model.addClass = content.addClass;
	}

	if (content.slickAutoPlay) {
		model.slickAutoPlay = content.slickAutoPlay;
	}

	if (content.slickArrows) {
		model.slickArrows = content.slickArrows;
	}

	if (content.slickDots) {
		model.slickDots = content.slickDots;
	}

	if (content.slickFade) {
		model.slickFade = content.slickFade;
	}

	if (content.slickSlide) {
		model.slickSlide = content.slickSlide;
	}

	if (content.slickSlideMd) {
		model.slickSlideMd = content.slickSlideMd;
	}

	if (content.slickSlideSm) {
		model.slickSlideSm = content.slickSlideSm;
	}

	return new Template("experience/components/layouts/slickSlider").render(model).text;
};
