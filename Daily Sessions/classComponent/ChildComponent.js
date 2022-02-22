export default function ChildComponent(props) {
    return (
        <>
        <label>Enter name</label>
        <input onChange={(event) => this.nameChange(event)} /><br />
        <p>The name entered is {props.name}</p>
    </>
    )
}