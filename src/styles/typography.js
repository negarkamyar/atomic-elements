import "fontsource-roboto";
const fontFamily = "roboto"
const smallTextSize = 14;
const mediumTextSize = 16;
const largeTextSize = 18;
const regularWeight ='regular';
const mediumWeight ='bold';
const textStyles = {
    smallReg: {
        fontSize: smallTextSize,
        fontWeight:regularWeight,
        fontFamily: fontFamily,
    },
    mediumReg: {
        fontSize: mediumTextSize,
        fontWeight: regularWeight,
        fontFamily: fontFamily,
    },
    largeBold: {
        fontSize: largeTextSize,
        fontWeight: mediumWeight,
        fontFamily: fontFamily,
    },
}
export default textStyles