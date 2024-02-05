import React from "react";
import { styled } from "styled-components";

const FixedDom = () => {
  return (
    <FixedDomWrapper id="fixed">
      <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius incidunt neque dolorum quas vel dignissimos
        laborum, facere ab iure distinctio deserunt numquam reiciendis earum beatae corporis omnis soluta quaerat eos
        consequatur in odit illo doloremque dolorem? Cupiditate ipsum facilis earum fugit cum unde, cumque, nobis quis
        hic, quam veritatis dolore accusantium iusto esse molestiae quia. Laborum enim ea labore corporis autem
        doloribus. Optio eligendi suscipit, blanditiis eius consequatur facilis odit quis repellendus quae voluptate
        exercitationem commodi dolore aspernatur unde, omnis aut voluptas? Ut, delectus quo tempora dolor iure minima
        architecto ex tenetur perferendis. Dignissimos eum atque magnam laboriosam quaerat ducimus illum voluptatum
        reiciendis, saepe libero cum expedita quam veniam. Cupiditate ipsa, accusamus soluta rem eaque amet eos in
        maiores minima dolore quaerat illum, atque reiciendis iure corrupti pariatur fuga laboriosam? Explicabo mollitia
        optio recusandae maxime laborum pariatur id totam dolor, quisquam esse laboriosam voluptate error soluta sint
        magnam earum dolores cumque corporis? Aliquam, quo illum. Voluptatem necessitatibus totam dolores asperiores
        commodi, in molestias rem ratione consectetur accusantium dicta iure consequatur eaque voluptate quidem vitae,
        debitis dolorem. Iusto quae cupiditate sunt consectetur illo amet rerum architecto repellendus? Quaerat, itaque.
        Soluta quibusdam vel ratione nostrum deserunt, in natus a cum impedit necessitatibus quo libero ullam. Molestiae
        illo obcaecati, ex sunt odio placeat numquam, modi, possimus distinctio impedit veritatis quam. Ipsam, modi
        consectetur repellat at quia reprehenderit dolor ducimus non quos tempore nulla minus dicta necessitatibus esse
        cumque porro ex. Laborum fugiat, minima vel assumenda excepturi impedit veritatis! Ducimus repudiandae suscipit
        officia deleniti exercitationem maxime aut illum accusamus delectus tempora asperiores amet quas enim
        reprehenderit tempore voluptatibus, error sed deserunt, autem repellendus. Officiis optio impedit assumenda
        vitae delectus voluptatum facilis iste rem repellat. Incidunt tempora laborum cumque sed dicta repudiandae quasi
        nam, accusamus repellendus quaerat temporibus voluptatum ipsa veniam eum quisquam sit excepturi.
      </span>
      <img
        src="https://img.freepik.com/free-photo/cute-small-puppy-of-corgi-dog-calmly-posing-isolated-over-white-studio-background-looks-happy_155003-46197.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1707004800&semt=sph"
        alt=""
      />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis harum dolores, praesentium necessitatibus
        pariatur nam reprehenderit voluptates illum, repellat facere quidem perferendis accusantium maxime quibusdam
        sunt fugit numquam, blanditiis quo consectetur in. Dolore tenetur nobis nesciunt reiciendis ut nemo totam eum
        quia aliquam ea repellendus deleniti accusamus debitis neque vero id repellat, illo minima labore architecto aut
        tempore. Quasi suscipit eos labore quo sapiente nemo asperiores ipsa a repellat ipsum perferendis animi nostrum
        unde facilis eum iusto repudiandae, dicta, architecto dolorem expedita voluptatibus? Nemo, maiores modi
        repudiandae quae et delectus fugit, quaerat quas, nesciunt saepe tenetur voluptate ex perferendis.
      </span>
    </FixedDomWrapper>
  );
};

export default FixedDom;

const FixedDomWrapper = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 400px;
  position: fixed;
  font-size: 8px;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 0;
  pointer-events: none;
  img {
    width: 100%;
  }
`;
