import PropTypes from 'prop-types';

const SlashRender = (props: any) => {
    return (
        <div>
            <h2 className="preview">Preview Command</h2>
            <div className="slashRender">{props.name ? (<p className="namePreview">/{props.name}</p>) : <p className="placeholder">Message #discord-command-creator</p>}</div>
        </div>
    );
};

SlashRender.propTypes = {
    name: PropTypes.string
};

export default SlashRender;