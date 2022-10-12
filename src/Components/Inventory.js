import { useState } from "react";
import { ArmorTable } from "../Equipment/ArmorTable";
import { ShieldTable } from "../Equipment/ArmorTable";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function rando(min, max) {
  return Math.floor(Math.random() * max) + min;
}



export const Armor = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [armorArray, setArmorArray] = useState([]);

 const purchasedArmor = armorArray.map((item, index) => 
 
 <div className="row">
    <div className="col-2 listFrame">
      <p>{item.armorName}</p>
    </div>
    <div className="col-1 listFrame">
      <p>{item.cost}</p>
    </div>
    <div className="col-1 listFrame">
      <p>{item.armorBonus}</p>
    </div>
    <div className="col-1 listFrame">
      <p>{item.maxDexBonus}</p>
    </div>
    <div className="col-1 listFrame">
      <p>{item.armorCheck}</p>
    </div>
    <div className="col-1 listFrame">
      <p>{item.spellFail}</p>
    </div>
    <div className="col-1 listFrame">
      <p>{item.speed30}</p>
    </div>
    <div className="col-1 listFrame">
      <p>{item.speed20}</p>
    </div>
    <div className="col-1 listFrame">
      <p>{item.weight}</p>
    </div>
    <div className="col-1">
      <button onClick={()=>alert("add remove function")}>Remove</button>
    </div>
  </div>
 )

  const armorDisplay = Object.entries(ArmorTable).map((item, index) => (
    <div key={index} className="row">
      <div className="col-2">
        <p>{item[1].armorName}</p>
      </div>
      <div className="col-1">
        <p>{item[1].cost}</p>
      </div>
      <div className="col-2">
        <p>{item[1].armorBonus}</p>
      </div>
      <div className="col-2">
        <p>{item[1].maxDexBonus}</p>
      </div>
      <div className="col-2">
        <p>{item[1].armorCheck}</p>
      </div>
      <div className="col-1">
        <button onClick={()=>armorArray.push(item[1])}>Add</button>
      </div>
    </div>
  ));




  return (
    <>
    <div className="row">
    <div className="col-2 listFrame">
      <p>Armor</p>
    </div>
    <div className="col-1 listFrame">
      <p>Cost</p>
    </div>
    <div className="col-1 listFrame">
      <p>Armor Bonus</p>
    </div>
    <div className="col-1 listFrame">
      <p>Max Dex Bonus</p>
    </div>
    <div className="col-1 listFrame">
      <p>Armor Check</p>
    </div>
    <div className="col-1 listFrame">
      <p>Spell Fail</p>
    </div>
    <div className="col-1 listFrame">
      <p>Speed (30ft)</p>
    </div>
    <div className="col-1 listFrame">
      <p>Speed (20ft)</p>
    </div>
    <div className="col-1 listFrame">
      <p>Weight</p>
    </div>
  </div>
  <div>{purchasedArmor}</div>


      <Button variant="primary" onClick={handleShow}>
        Add Armor
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Armor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-2">
              <p>Armor</p>
            </div>
            <div className="col-1">
              <p>Cost</p>
            </div>
            <div className="col-2">
              <p>Armor Bonus</p>
            </div>
            <div className="col-2">
              <p>Max Dex Bonus</p>
            </div>
            <div className="col-2">
              <p>Armor Check</p>
            </div>
            
          </div>
          {armorDisplay}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const StartingGold = (props) => {
  const dObj = {
    Barbarian: 4,
    Bard: 4,
    Cleric: 5,
    Druid: 2,
    Fighter: 6,
    Monk: 5,
    Paladin: 6,
    Ranger: 6,
    Rogue: 5,
    Sorcerer: 3,
    Wizard: 3,
  };

  function genGold() {
    let rolledGold = 0;
    let startGold = 0;
    for (let i = 0; i < dObj[props.selectedClass]; i++) {
      rolledGold = rolledGold + rando(1, 4);
    }
    return props.selectedClass == "Monk" ? rolledGold * 10 : rolledGold * 100;
  }

  return (
   <p>{genGold()}</p>
  )
  ;
};
