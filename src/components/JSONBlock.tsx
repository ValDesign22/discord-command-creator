import { CopyBlock, dracula } from "react-code-blocks";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState } from "react";

const JSONBlock = (props: any) => {
    const [showed, setShowed] = useState(false);

    const toggleJson = (event: any) => {
        event.preventDefault();

        setShowed(!showed);
    }

    return (
        <div>
            <h2 className="toggle" onClick={toggleJson}>{showed ? (<FaChevronUp />) : (<FaChevronDown />)} Show/Hide command data</h2>
            <div className="json-block">
                {showed ? (<CopyBlock
                    text={props.json}
                    language="json"
                    theme={dracula}
                    showLineNumbers
                    codeBlock
                />) : null}
            </div>
        </div>
    );
};

JSONBlock.propTypes = {
    json: PropTypes.string
};

export default JSONBlock;