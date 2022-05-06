declare function Title(props: any): JSX.Element;
declare namespace Title {
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
export default Title;
import PropTypes from "prop-types";
