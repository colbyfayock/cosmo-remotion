import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Subtitle} from './HelloWorld/Subtitle';

import {Cosmo} from './HelloWorld/Cosmo';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Space Jelly',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Cosmo"
				component={Cosmo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
