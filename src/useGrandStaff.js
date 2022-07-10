import ReactNativeSVGContext from './ReactNativeSVGContext';
import FontPack from './NotoFontPack';
import Vex from 'vexflow';

const useGrandStaff = ({
	contextSize = { x: 300, y: 310 },
	staveOffset = { x: 5, y: 5 },
	staveWidth,

}) => {
	const context = new ReactNativeSVGContext(FontPack, {
		width: contextSize.x,
		height: contextSize.y,
	});
	const trebleStaff = new Vex.Flow.Stave(staveOffset.x, staveOffset.y, staveWidth);
    const bassStaff = new Vex.Flow.Stave(staveOffset.x, staveOffset.y+77, staveWidth);

    let brace = new Vex.Flow.StaveConnector(trebleStaff, bassStaff).setType(3);
    let lineLeft = new Vex.Flow.StaveConnector(trebleStaff, bassStaff).setType(1);
    let lineRight = new Vex.Flow.StaveConnector(trebleStaff, bassStaff).setType(6);

	trebleStaff.setContext(context);
	bassStaff.setContext(context);

	trebleStaff.addClef('treble');
	bassStaff.addClef('bass');

	trebleStaff.setContext(context).draw()
    bassStaff.setContext(context).draw();

    brace.setContext(context).draw();
    lineLeft.setContext(context).draw();
    lineRight.setContext(context).draw();

	return [context, [trebleStaff, bassStaff]];
};

export default useGrandStaff;
