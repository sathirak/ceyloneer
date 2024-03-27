import Marker from "./marker";

const MarkerDrawer = () => {
	return (
		<>
			<Marker cx={320} cy={150} href="#1" title="This is for my cabana resort" />
            <Marker cx={320} cy={250} href="#1" title="This is for my cabana resort" />
            <Marker cx={420} cy={450} href="#1" title="This is for my cabana resort" />
		</>
	);
};

export default MarkerDrawer;
