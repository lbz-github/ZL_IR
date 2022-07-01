/**
 * IR remote
 */
//% icon="\uf1eb" weight=11 color=50  block="IR_V1.5"
namespace ZLbit_IR {

    /**
    * initialization
    */
    //% blockId=ZLbit_IR_init
    //% blockGap=20 weight=90
    //% block="connect ir receiver to %pin"
    //% shim=ZLbit_IR::init
    export function init(pin: Pins): void {
      return
    }
  
    /**
    * button pushed.
    */
    //% blockId=ZLbit_IR_received_event
    //% blockGap=20 weight=89
    //% block="on |%btn| button pressed"
    //% shim=ZLbit_IR::onPressEvent
    export function onPressEvent(btn: RemoteButton, body:Action): void {
      return
    }
  
  
  }
  
