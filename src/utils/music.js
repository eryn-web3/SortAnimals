const Sound = require("react-native-sound");

const FailureCat = new Sound("Angry-cat-sounds.wav", Sound.MAIN_BUNDLE, error => {});

const FailureDog = new Sound("Angry-dog-sounds.wav", Sound.MAIN_BUNDLE, error => {});

export const playFailureCat = () => {
	if (FailureCat.isPlaying) {
		FailureCat.stop(() => FailureCat.play());
	} else {
		FailureCat.play();
	}
};

export const playFailureDog = () => {
	if (FailureDog.isPlaying) {
		FailureDog.stop(() => FailureDog.play());
	} else {
		FailureDog.play();
	}
};
