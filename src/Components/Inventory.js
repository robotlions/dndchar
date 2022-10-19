import { useEffect, useState } from "react";
import { ArmorTable } from "../Equipment/ArmorTables";
import { ShieldTable } from "../Equipment/ArmorTables";
import * as WeaponTables from "../Equipment/WeaponTables";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function rando(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function armorCost() {
  return armorArray.reduce((a, b) => a + b.cost, 0);
}

function weaponCost() {
  return weaponArray.reduce((a, b) => a + b.cost, 0);
}

function armorBonusTotal(){
  return armorArray.reduce((a,b) => a + b.armorBonus, 0);
}

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

let armorArray = [];
let weaponArray = [];

export const ArmorMain = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const purchasedArmor = armorArray.map((item, index) => (
    <div key={index} className="row">
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
        <Button variant="primary" onClick={() => removeItem(index)}>Remove</Button>
      </div>
    </div>
  ));

  function removeItem(index){
    armorArray.splice(index, 1);
    props.setArmorMoney(armorCost());
    props.setArmorBonusTotal(armorBonusTotal())
  }

  function addItem(item){
    if(item.cost < props.totalSilver){
    armorArray.push(item);
    props.setArmorMoney(armorCost());
    props.setArmorBonusTotal(armorBonusTotal());
    }
    else{
      alert("Not enough money, chump!")
    }
  }

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
        <Button variant="success"
          onClick={() => addItem(item[1])}
        >
          Buy
        </Button>
      </div>
    </div>
  ));

  const shieldDisplay = Object.entries(ShieldTable).map((item, index) => (
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
        <Button variant="success"
          onClick={() => addItem(item[1])}
        >
          Buy
        </Button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="row">
        <h4>Armor</h4>
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
      <div>Total Armor Cost: {armorCost()}</div>

      <Button variant="primary" onClick={handleShow}>
        Buy Armor and Shields
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
          <h5>Armor</h5>
          {armorDisplay}
          <h5>Shields</h5>
          {shieldDisplay}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const WeaponsMain = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const purchasedWeapons = weaponArray.map((item, index) => (
    <div key={index} className="row">
      <div className="col-2 listFrame">
        <p>{item.weaponName}</p>
      </div>
      <div className="col-1 listFrame">
        <p>{item.cost}</p>
      </div>
      <div className="col-1 listFrame">
        <p>{item.dmgS}</p>
      </div>
      <div className="col-1 listFrame">
        <p>{item.dmgM}</p>
      </div>
      <div className="col-1 listFrame">
        <p>{item.critical}</p>
      </div>
      <div className="col-1 listFrame">
        <p>{item.range}</p>
      </div>
      <div className="col-1 listFrame">
        <p>{item.weight}</p>
      </div>
      <div className="col-1 listFrame">
        <p>{item.type}</p>
      </div>
      
      <div className="col-1">
        <Button variant="primary" onClick={() => removeItem(index)}>Remove</Button>
      </div>
    </div>
  ));

  function removeItem(index){
    weaponArray.splice(index, 1);
    props.setWeaponsMoney(weaponCost());
  }

  function addItem(item){
    if(item.cost < props.totalSilver){
    weaponArray.push(item);
    props.setWeaponsMoney(weaponCost());
    }
    else{
      alert("Not enough money, chump!")
    }
  }

  const weaponDisplay = Object.entries(WeaponTables.simpleWeapons).map((item, index) => (
    <div key={index} className="row">
      <div className="col-2">
        <p>{item[1].weaponName}</p>
      </div>
      <div className="col-1">
        <p>{item[1].cost}</p>
      </div>
      <div className="col-2">
        <p>{item[1].dmgS}</p>
      </div>
      <div className="col-2">
        <p>{item[1].dmgM}</p>
      </div>
      <div className="col-2">
        <p>{item[1].range}</p>
      </div>
      <div className="col-1">
        <Button variant="success"
          onClick={() => addItem(item[1])}
        >
          Buy
        </Button>
      </div>
    </div>
  ));

  

  return (
    <>
      <div className="row">
        <h4>Weapons</h4>
        <div className="col-2 listFrame">
          <p>Weapon</p>
        </div>
        <div className="col-1 listFrame">
          <p>Cost</p>
        </div>
        <div className="col-1 listFrame">
          <p>Damage Small</p>
        </div>
        <div className="col-1 listFrame">
          <p>Damage Medium</p>
        </div>
        <div className="col-1 listFrame">
          <p>Critical</p>
        </div>
        <div className="col-1 listFrame">
          <p>Range</p>
        </div>
        <div className="col-1 listFrame">
          <p>Weight</p>
        </div>
        <div className="col-1 listFrame">
          <p>Type</p>
        </div>
      </div>
      <div>{purchasedWeapons}</div>
      <div>Total Weapon Cost: {weaponCost()}</div>

      <Button variant="primary" onClick={handleShow}>
        Buy Weapons
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Armor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-2">
              <p>Weapon</p>
            </div>
            <div className="col-1">
              <p>Cost</p>
            </div>
            <div className="col-2">
              <p>Damage Small</p>
            </div>
            <div className="col-2">
              <p>Damage Medium</p>
            </div>
            <div className="col-2">
              <p>Range</p>
            </div>
          </div>
          {weaponDisplay}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};




export const StartingSilver = (props) => {
  function genSilver() {
    let rolledGold = 0;
    for (let i = 0; i < dObj[props.selectedClass]; i++) {
      rolledGold = rolledGold + rando(1, 4);
    }
    return props.selectedClass == "Monk"
      ? props.setTotalSilver(rolledGold * 10)
      : props.setTotalSilver(rolledGold * 100);
  }

  return (
    <>
    <h4>Money</h4>
      {props.totalSilver === 0 ? (
        <Button variant="primary" onClick={() => genSilver()}>
          Roll Starting Money
        </Button>
      ) : (
        <Button
          variant="primary"
          onClick={() => {
            props.setTotalSilver(0);
            props.setArmorMoney(0);
            props.setWeaponsMoney(0);
            armorArray = [];
            weaponArray = [];
          }}
        >
          Reset money and inventory
        </Button>
      )}
    </>
  );
};


