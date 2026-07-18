export default function ServerInfo(){
    const ServerTime = new Date().toLocaleTimeString();

    return(
        <div>
            <h1>
                Server Time:{ServerTime}
            </h1>
        </div>
    )
}