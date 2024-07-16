
function Component1(){
    // const arr = ["abc", "def", "ghi", "jkl"];
    const arr = [<li>abc</li>, <li>def</li>, <li>ghi</li>, <li>jkl</li>];

    return <div> {arr} </div>
}
export default Component1;


//in react we can pass a list of components inside the jsx curlies and will render it