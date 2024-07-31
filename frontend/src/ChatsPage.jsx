// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
import {PrettyChatWindow} from 'react-chat-engine-pretty';

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic('6528b7d2-fc26-4925-8032-643bc5f83780', props.user.username, props.user.secret);

//   return (
//     <div className="background" style={{height: '100vh'}}>
//       <MultiChatSocket {...chatProps}/>
//       <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
//       {/* <PrettyChatWindow
//         projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
//         username={props.user.username}
//         secret={props.user.secret}
//       /> */}
//     </div>
//   );
// };

// export default ChatsPage;
// import { PrettyChatWindow } from 'react-chat-engine-pretty';
// import React from 'react';

 const ChatsPage = (props) => {
   return(
      <div style={{height: '100vh'}}> 
        <PrettyChatWindow
              projectId="6528b7d2-fc26-4925-8032-643bc5f83780"
              username={props.user.username}
              secret={props.user.secret}
              style={{ height: '100%' }}
            /> 
      </div>
   );
 }
export default ChatsPage;