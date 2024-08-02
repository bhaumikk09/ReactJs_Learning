function List()
{
    let items = ["Vadodara","Ahemdabad","Mumbai","Delhi"];





    return <>
        <h1>List of Items</h1>
        <ul className ="List">
            {items.map((item,index) =>(
                <li key={item} onClick={()=> console.log(item,index)}>{item}</li>
            ))}
        </ul>
            </>
}

export default List;