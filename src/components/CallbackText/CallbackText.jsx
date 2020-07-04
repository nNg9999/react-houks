
import React from 'react';


// коли React.memo() недопомагає використовуємо useCallback та залишаємо React.memo
// useCallback використовуэмо тыльки для статичних функцій, для динамічних  він не діє
const CallbackText = React.memo(({ reset }) => {
  console.log('Text render');
  return (

    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam beatae corporis distinctio voluptates modi, amet, tempora autem pariatur laudantium aspernatur animi laborum et enim minima debitis nisi magnam dolores unde. Porro dolorum officia neque tempora magnam, possimus ipsam natus corporis aut mollitia ipsa necessitatibus atque quibusdam impedit, quo hic!
       </p>
      <button onClick={reset}>Reset</button>
    </div>
  );

})

export default CallbackText;



// class CallbackText extends PureComponent {
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return nextProps !== this.props;
//   // }

//   render() {
//     return (
//       <div>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam beatae corporis distinctio voluptates modi, amet, tempora autem pariatur laudantium aspernatur animi laborum et enim minima debitis nisi magnam dolores unde. Porro dolorum officia neque tempora magnam, possimus ipsam natus corporis aut mollitia ipsa necessitatibus atque quibusdam impedit, quo hic!
//        </p>
//       </div>
//     )
//   }
// }

// export default CallbackText;

