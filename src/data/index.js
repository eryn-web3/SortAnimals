// @flow
import {Image} from "react-native";
import type {ResolvedAssetSource} from "AssetSourceResolver";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
import {getUniqueFromArrays, getRatioOfImage} from "./utils";

export type PhotoSource = $ReadOnly<{|
	resource: any,
	source: string,
	tags: Array<string>,
	ratio: number,
	action?: string
|}>;

export const photoSources: Array<PhotoSource> = [
	{
		resource: require("../img/fat_cat_1.jpg"),
		source: "https://ca-times.brightspotcdn.com/dims4/default/6c818b8/2147483647/strip/true/crop/1611x906+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2Ffd%2Fef%2F05c1aab3e76c3d902aa0548c0046%2Fla-la-hm-pet-issue-18-jpg-20150615",
		tags: ["fat cat", "cat"]
	},
	{
		resource: require("../img/fat_cat_2.jpg"),
		source: "https://peopledotcom.files.wordpress.com/2018/08/34982856_913748398827212_5249963337373974528_n.jpg",
		tags: ["fat cat", "cat"]
	},
	{
		resource: require("../img/fat_cat_3.jpg"),
		source: "https://blueskyvet.com/wp-content/uploads/2014/12/Fat_Cat_-_Shape_Shifting_copy.jpg",
		tags: ["fat cat", "cat"]
	},

	{
		resource: require("../img/fat_cat_4.jpg"),
		source: "https://www.peta.org/wp-content/uploads/2014/02/FINALbasilINSET-668x336.jpg?20190103122845",
		tags: ["fat cat", "cat"]
	},
	{
		resource: require("../img/angry_cat_1.jpg"),
		source: "https://www.swjournal.com/wp-content/uploads/2018/11/shutterstock_1075355216.jpg",
		tags: ["angry cat", "cat"]
	},
	{
		resource: require("../img/angry_cat_2.jpg"),
		source: "https://www.dailydot.com/wp-content/uploads/b8e/19/e4721c4a5b5da1ce89f9fb16b57da789.jpg",
		tags: ["angry cat", "cat"]
	},
	{
		resource: require("../img/angry_cat_3.jpg"),
		source: "http://img1.wikia.nocookie.net/__cb20130404145553/darksouls/images/5/5b/Angry_Cat_Face_Wallpaper.jpg",
		tags: ["angry cat", "cat"]
	},
	{
		resource: require("../img/sad_dog_1.jpg"),
		source: "https://www.petmd.com/sites/default/files/do_dogs_feel_sadness.jpg",
		tags: ["sad dog", "dog"]
	},
	{
		resource: require("../img/sad_dog_2.jpg"),
		source: "https://img.huffingtonpost.com/asset/5baeaef02000009900ff5c5c.jpeg?ops=scalefit_720_noupscale",
		tags: ["sad dog", "dog"]
	},
	{
		resource: require("../img/sad_dog_3.jpg"),
		source: "https://i.imgflip.com/1cr2z3.jpg",
		tags: ["sad dog", "dog"]
	},
	{
		resource: require("../img/sad_dog_4.jpg"),
		source: "https://peopledotcom.files.wordpress.com/2017/04/guilty-dog.jpg",
		tags: ["sad dog", "dog"]
	},
	{
		resource: require("../img/amazed_dog_1.jpg"),
		source: "https://image.shutterstock.com/image-photo/funny-black-white-mixed-breed-260nw-1036847707.jpg",
		tags: ["amazed dog", "dog"]
	},
	{
		resource: require("../img/amazed_dog_2.jpg"),
		source: "https://data.whicdn.com/images/26126038/large.jpg",
		tags: ["amazed dog", "dog"]
	},
	{
		resource: require("../img/amazed_dog_3.jpg"),
		source: "https://2.bp.blogspot.com/-TwalWc7H9uY/Vo419BHVZ6I/AAAAAAAAN8w/yCa4yFo5x_E/s1600/amazeddog.jpg",
		tags: ["amazed dog", "dog"]
	},
	{
		resource: require("../img/playing_dog_1.jpg"),
		source: "https://www.purina.co.uk/sites/g/files/mcldtz2481/files/2017-11/Playing-With-Dog_3ee260f6-29cf-4883-a1c6-4efe1d212835_0.jpg",
		tags: ["playing dog", "dog"]
	},
	{
		resource: require("../img/playing_dog_2.jpg"),
		source: "https://www.fourpaws.com/-/media/Images/FourPaws-NA/US/articles/dog-playtime-927x388.jpg",
		tags: ["playing dog", "dog"]
	},
	{
		resource: require("../img/playing_dog_3.jpg"),
		source: "https://www.dogingtonpost.com/wp-content/uploads/2013/10/frisbee.jpg",
		tags: ["playing dog", "dog"]
	},
	{
		resource: require("../img/playing_dog_4.jpg"),
		source: "https://cdn.shopify.com/s/files/1/0028/1978/4763/articles/Everything-you-need-to-know-about-joints-header_1400x.progressive.jpg?v=1537285042",
		tags: ["playing dog", "dog"]
	},
	{
		resource: require("../img/dressed_cat_1.jpg"),
		source: "http://petslady.com/sites/default/files/2018-11/51t%2B-VVMqoL.jpg",
		tags: ["dressed cat", "cat"]
	},
	{
		resource: require("../img/dressed_cat_2.jpg"),
		source: "https://cache.desktopnexus.com/thumbseg/1343/1343252-bigthumbnail.jpg",
		tags: ["dressed cat", "cat"]
	},
	{
		resource: require("../img/dressed_cat_3.jpg"),
		source: "https://cdn.lolwot.com/wp-content/uploads/2015/08/10-adorable-cats-in-costumes-that-will-brighten-up-your-day-2.jpg",
		tags: ["dressed cat", "cat"]
	},
	{
		resource: require("../img/dog_toilet.png"),
		source: "",
		tags: [],
		action: "death_on_touch"
	}
].map(item => ({
	...item,
	ratio: getRatioOfImage(item.resource)
}));

const memoize = require("memoizee");

const getUniqueProperties: () => Array<string> = memoize(
	getUniqueFromArrays.bind(undefined, photoSources.map(({tags}) => tags))
);

const getPhotosOfProperties_ = (
	...propertyArray: Array<string>
): Array<PhotoSource> =>
	photoSources.filter(({tags}) => tags.some(r => propertyArray.includes(r)));

export const getPhotosOfProperties: (
	...propertyArray: Array<string>
) => Array<PhotoSource> = memoize(getPhotosOfProperties_, {
	length: false
});

const getAvailableProperties_ = (property: string): Array<string> => {
	const relatedProperties = getUniqueFromArrays(
		getPhotosOfProperties(property).map(({tags}) => tags)
	);
	return getUniqueProperties().filter(p => !relatedProperties.includes(p));
};

export const getActionItems = (): Array<PhotoSource> =>
	photoSources.filter(a => typeof a.action === "string");

export const getAvailableProperties = memoize(getAvailableProperties_);
