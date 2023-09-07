export default function NumberList({arr}){


    return(
        <>
        <ul className="listul">
        {arr.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
        
        
        
        </>
    );
}