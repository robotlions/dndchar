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
      <div className="col">
        <p style={{fontWeight: "bold"}}>{item.armorName}</p>
      </div>
      <div className="col">
        <p>Armor Bonus: {item.armorBonus}</p>
      </div>
      <div className="col">
        <p>Max Dex Bonus: {item.maxDexBonus}</p>
      </div>
      <div className="col">
        <p>Armor Check: {item.armorCheck}</p>
      </div>
      <div className="col">
        <p>Spell Fail: {item.spellFail}</p>
      </div>
      <div className="col">
        <p>Speed 30': {item.speed30}</p>
      </div>
      <div className="col">
        <p>Speed 20': {item.speed20}</p>
      </div>
      <div className="col">
        <Button variant="warning" onClick={() => removeItem(index)}>Remove</Button>
      </div>
    </div>
  ));

  function removeItem(index){
    armorArray.splice(index, 1);
    props.setArmorMoney(armorCost());
    props.setArmorBonusTotal(armorBonusTotal())
  }

  // function addItem(item){
  //   if(item.cost < props.totalSilver){
  //   armorArray.push(item);
  //   props.setArmorMoney(armorCost());
  //   props.setArmorBonusTotal(armorBonusTotal());
  //   }
  //   else{
  //     alert("Not enough money, chump!")
  //   }
  // }

  function handleCheck(event, item){
    if (event.target.checked === true) {
      if(item.cost < props.totalSilver){
        armorArray.push(item);
        props.setArmorMoney(armorCost());
        props.setArmorBonusTotal(armorBonusTotal());
        }
        else{
          alert("Not enough money, chump!")
          event.target.checked = false;
        }
  }
  if(event.target.checked===false){
    let i = armorArray.indexOf(item);
    armorArray.splice(i, 1);
    props.setArmorMoney(armorCost());
    props.setArmorBonusTotal(armorBonusTotal())
  }
}

  function armorDisplay(filter){
    return(
   Object.values(ArmorTable).filter((item)=>item.cat===filter).map((item, index) => (
    <div key={index} className="row">
      <div className="col-1">
      <input
        className="form-check-input"
        type="checkbox"
        value={item.featName}
        onChange={(event) => handleCheck(event, item)}
      />
      </div>
      <div className="col-3">
        {item.armorName}
      </div>
      <div className="col-2">
        {item.cost}
      </div>
      <div className="col-2">
        {item.armorBonus}
      </div>
      <div className="col-2">
        {item.maxDexBonus}
      </div>
      <div className="col-2">
        {item.armorCheck}
      </div>
      {/* <div className="col-1">
        <Button variant="success"
          onClick={() => addItem(item)}
        >
          Buy
        </Button>
      </div> */}
    </div>
  )))};

  

  const shieldDisplay = Object.values(ShieldTable).map((item, index) => (
    <div key={index} className="row">
      <div className="col-1">
      <input
        className="form-check-input"
        type="checkbox"
        value={item.featName}
        onChange={(event) => handleCheck(event, item)}
      />
      </div>
      <div className="col-3">
        {item.armorName}
      </div>
      <div className="col-2">
        {item.cost}
      </div>
      <div className="col-2">
        {item.armorBonus}
      </div>
      <div className="col-2">
        {item.maxDexBonus}
      </div>
      <div className="col-2">
        {item.armorCheck}
      </div>
      {/* <div className="col-1">
        <Button variant="success"
          onClick={() => addItem(item)}
        >
          Buy
        </Button>
      </div> */}
    </div>
  ));

useEffect(()=>{ 
  props.setArmorArray(armorArray)
}, [props]);
  

  return (
    <>
     
      <div>{purchasedArmor}</div>
     

      <Button variant="secondary" onClick={handleShow}>
        Buy Armor and Shields
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Armor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div>Silver: {props.totalSilver-props.weaponsMoney-armorCost()}</div>
          <div className="col-1">
              
            </div>
            <div className="col-3">
              <p>Armor</p>
            </div>
            <div className="col-2">
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
          <h5>Light Armor</h5>
          {armorDisplay("light")}
          <h5>Medium Armor</h5>
          {armorDisplay("medium")}
          <h5>Heavy Armor</h5>
          {armorDisplay("heavy")}
          <h5>Shields</h5>
          {shieldDisplay}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const WeaponsMain = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleCheck(event, item){
    if (event.target.checked === true) {
      if(item.cost < props.totalSilver){
        weaponArray.push(item);
        props.setWeaponsMoney(weaponCost());
        }
        else{
          alert("Not enough money, chump!")
          event.target.checked = false;
        }
  }
  if(event.target.checked===false){
    let i = weaponArray.indexOf(item);
    weaponArray.splice(i, 1);
    props.setWeaponsMoney(weaponCost());
  }
  }

  const purchasedWeapons = weaponArray.map((item, index) => (
    <div key={index} className="row">
      <div className="col">
        <p style={{fontWeight: "bold"}}>{item.weaponName}</p>
      </div>
      <div className="col">
        <p>Damage, Small: {item.dmgS}</p>
      </div>
      <div className="col">
        <p>Damage, Medium: {item.dmgM}</p>
      </div>
      <div className="col">
        <p>Critical: {item.critical}</p>
      </div>
      <div className="col">
        <p>Range: {item.range}</p>
      </div>
      <div className="col">
        <p>Type: {item.type}</p>
      </div>
      
      <div className="col">
        <Button variant="warning" onClick={() => removeItem(index)}>Remove</Button>
      </div>
    </div>
  ));

  function removeItem(index){
    weaponArray.splice(index, 1);
    props.setWeaponsMoney(weaponCost());
  }

  // function addItem(item){
  //   if(item.cost < props.totalSilver){
  //   weaponArray.push(item);
  //   props.setWeaponsMoney(weaponCost());
  //   }
  //   else{
  //     alert("Not enough money, chump!")
  //   }
  // }

  function weaponDisplay(filter){
return(
   Object.values(WeaponTables.weaponsList).filter((item)=>item.cat===filter).map((item, index) => (
    <div key={index} className="row">
      <div className="col-1">
      <input
        className="form-check-input"
        type="checkbox"
        value={item.featName}
        onChange={(event) => handleCheck(event, item)}
      />
      </div>
      <div className="col-3">
        {item.weaponName}
      </div>
      <div className="col-2">
        {item.cost}
      </div>
      <div className="col-2">
        {item.dmgS}
      </div>
      <div className="col-2">
        {item.dmgM}
      </div>
      <div className="col-2">
        {item.range}
      </div>
      {/* <div className="col-1">
        <Button variant="success"
          onClick={() => addItem(item)}
        >
          Buy
        </Button>
      </div> */}
    </div>
  )))};

  useEffect(()=>{
    props.setWeaponArray(weaponArray)
  },[props])

  return (
    <>
     
      <div>{purchasedWeapons}</div>
     

      <Button variant="secondary" onClick={handleShow}>
        Buy Weapons
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Weapons</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div>Silver: {props.totalSilver-props.armorMoney-weaponCost()}</div>
          <div className="col-1">
              
            </div>
            <div className="col-3">
              <p>Weapon</p>
            </div>
            <div className="col-2">
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
          <h5>Simple Weapons</h5>
          {weaponDisplay("simple")}
          <h5>Martial Weapons</h5>
          {weaponDisplay("martial")}
          <h5>Exotic Weapons</h5>
          {weaponDisplay("exotic")}
          <h5>Ammunition</h5>
          {weaponDisplay("ammunition")}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
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
    return props.selectedClass === "Monk"
      ? props.setTotalSilver(rolledGold * 10)
      : props.setTotalSilver(rolledGold * 100);
  }

  const normalMoney = props.totalSilver === 0 ? (
    <Button variant="secondary" onClick={() => genSilver()}>
      Roll Starting Money
    </Button>
  ) : (
    <Button
      variant="secondary"
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
  );

if(props.munchkinMode===true){
  props.setTotalSilver(1000000)
};


  return (
    <>
    {!props.munchkinMode && normalMoney}
      {/* {props.totalSilver === 0 ? (
        <Button variant="secondary" onClick={() => genSilver()}>
          Roll Starting Money
        </Button>
      ) : (
        <Button
          variant="secondary"
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
      )} */}
    </>
  );
};


