import { useRef, useState } from "react";
import JSONBlock from "../components/JSONBlock";
import SlashRender from "../components/SlashRender";

const Home = () => {
    const commandName = useRef<HTMLInputElement>(null);
    const commandDesc = useRef<HTMLInputElement>(null);

    const [name, setName] = useState("");

    const [data, setData] = useState(`{}`);

    const previewCommand = (event: any) => {
        event.preventDefault();

        setName(commandName.current!.value);

        setData(`{
    "type": 1,
    "name": "${commandName.current!.value}",
    "description": "${commandDesc.current!.value}"
}`);
    }

    const deleteData = (event: any) => {
        event.preventDefault();

        setName("");
        setData(`{}`);
    }

    return (
        <div>
            <h1 className="web-title">Welcome to Discord command creator</h1>

            <form onSubmit={previewCommand}>
                <div className="commandCreator">
                    <div>
                        <input type="text" className="formInput" placeholder="Command name" ref={commandName} maxLength={32} required />
                    </div>

                    <div>
                        <input type="text" className="formInput" placeholder="Command description" ref={commandDesc} maxLength={100} required />
                    </div>
                    
                    <div>
                        <button className="commandButton" type="submit">Preview</button>
                        <button className="commandButton red" type="button" onClick={deleteData}>Delete</button>
                    </div>
                </div>
            </form>

            <SlashRender name={name}/>
            
            <JSONBlock json={data} />
        </div>
    );
};

export default Home;