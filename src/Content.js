function Content() {
    const handleNameChange = () => {
        const names = ['Hamza', 'Ali', "Ahmad"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    //Reason.... we pass refenrence b'cs unless Fn would get called immediately even we did't cliked the button(trigered event) 

    // we pass the reference of Fn to event as yu can see on Event
    const handleClick = () => {
        console.log('You clicked it!');
    }
    // we pass anonymous Fn to event inside of that fn we call the referenced fn where we pass arguments 
    const handleClick2 = (name) => {
        console.log(`${name} has cliked it!`);
    }
    // we pass anonymous Fn to event inside of that fn we call the referenced fn where we pass event itself
    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            {/* on doubleClick we've passed reference of Fn */}
            <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
            <button onClick={handleClick}>Click it</button> {/* referenced fn without  parameter*/}
            <button onClick={() => handleClick2('Hamza')}>Click it</button> {/* referenced fn with parameter*/}
            <button onClick={(e) => handleClick3(e)}>Click it</button> {/* referenced fn with passed event itself*/}
        </main>
    )
}

export default Content;