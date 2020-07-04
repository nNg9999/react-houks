import React, { useEffect, useContext } from 'react'

import UserContext from '../../context/UserContext'

const Text = () => {
  // useEffect(() => console.log(' Text did mount'), [])

  // const value = useContext(UserContext);

  console.log('Text perent');

  return (
    <div>
      {/* <p> {value} </p> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam beatae corporis distinctio voluptates modi, amet, tempora autem pariatur laudantium aspernatur animi laborum et enim minima debitis nisi magnam dolores unde. Porro dolorum officia neque tempora magnam, possimus ipsam natus corporis aut mollitia ipsa necessitatibus atque quibusdam impedit, quo hic!
       </p>
    </div>

  )
}

export default Text;





// const Text = () => {
//   useEffect(() => console.log(' Text did mount'), [])

//   return (

//        // rendr Props
//         <UserContext.Consumer>
//           {(value) => (
//             <div>
//               <p>
//                 {value}
//               </p>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam beatae corporis distinctio voluptates modi, amet, tempora autem pariatur laudantium aspernatur animi laborum et enim minima debitis nisi magnam dolores unde. Porro dolorum officia neque tempora magnam, possimus ipsam natus corporis aut mollitia ipsa necessitatibus atque quibusdam impedit, quo hic!
//               </p>
//             </div>
//           )}
//         </UserContext.Consumer>
//   )
// }

// export default Text;

