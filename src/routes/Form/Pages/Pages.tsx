import React, { useState } from 'react'
import * as Types from './Pages.types'

export const Pages = ({currentPage}:Types.PagesProps) => {

    const [nameValue, setNameValue] = useState("")
    const [secondNameValue, setSecondNameValue] = useState("")
    const [usernameValue, setUsernameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [phoneNumberValue, setPhoneNumberValue] = useState("")
    const [peselValue, setPeselValue] = useState("")
    const [formLegit, setFormLegit] = useState(false)
    const [tosAccepted, setTosAccepted] = useState()

    function containsNumbers(str:string) {
        return /\d/.test(str)
    }

    function containsOnlyLetters(str:string) {
        return /^[a-zA-Z]*$/.test(str);
      }

    function containsOnlyNumbers(str:string) {
        return /^\d+$/.test(str)
    }

    function checkIfLegit() {
        if (nameValue !== "" && !containsNumbers(nameValue) && containsOnlyLetters(nameValue) && secondNameValue !== "" && !containsNumbers(secondNameValue) && containsOnlyLetters(secondNameValue) && usernameValue !== "" && emailValue !== "" && emailValue.includes("@") && !emailValue.includes(" ") && phoneNumberValue !== "" && containsOnlyNumbers(phoneNumberValue) && peselValue !== "" && containsOnlyNumbers(peselValue)){
        setFormLegit(true)
    }
    else setFormLegit(false)
    }

        if (currentPage === 0){
            return (
                    <div className="formbody flex flex-col gap-3 h-[40vh]">
                        <div className="formheader text-sky-900 font-medium text-lg">
                            Lorem ipsum
                        </div>
                        <div className="inputs">
                        <form className='flex flex-col gap-3' id="secondPageForm">
                            <input className={nameValue !== "" && !containsNumbers(nameValue) && containsOnlyLetters(nameValue)  ? 'p-1 rounded-lg' : 'p-1 rounded-lg border-red-500 bg-red-200 text-red-500 '} onChange={(e) => {setNameValue(e.target.value)}} placeholder='Name' value={nameValue} id="name"></input>
                            <input className={secondNameValue !== "" && !containsNumbers(secondNameValue) && containsOnlyLetters(secondNameValue)  ? 'p-1 rounded-lg' : 'p-1 rounded-lg border-red-500 bg-red-200 text-red-500 '} onChange={(e) => {setSecondNameValue(e.target.value)}} value={secondNameValue} placeholder='Second Name' id="secondName"></input>
                            <input className={usernameValue !== "" ? 'p-1 rounded-lg' : 'p-1 rounded-lg border-red-500 bg-red-200 text-red-500 '} onChange={(e) => {setUsernameValue(e.target.value)}} placeholder='Username' value={usernameValue} id="username"></input>
                            <input className={emailValue !== "" && emailValue.includes("@") && !emailValue.includes(" ") ? 'p-1 rounded-lg' : 'p-1 rounded-lg border-red-500 bg-red-200 text-red-500 '} onChange={(e) => {setEmailValue(e.target.value)}} placeholder='E-mail address' id="email" value={emailValue}></input>
                        </form>
                        </div>
                    </div>
            )
   
                } 
                if (currentPage === 1){
                    return (
                    <div className="formbody flex flex-col gap-3 h-[40vh]">
                        <div className="formheader text-sky-900 font-medium text-lg">
                            Lorem ipsum
                        </div>
                        <div className="inputs" id="secondPageForm">
                            <form className='flex flex-col gap-3' onSubmit={() => checkIfLegit()}>
                                <input className={phoneNumberValue !== "" && containsOnlyNumbers(phoneNumberValue) ? 'p-1 rounded-lg' : 'p-1 rounded-lg border-red-500 bg-red-200 text-red-500 '} onChange={(e) => {setPhoneNumberValue(e.target.value)}} placeholder='Phone Number' value={phoneNumberValue}></input>
                                <input className={peselValue !== "" && containsOnlyNumbers(peselValue) ?'p-1 rounded-lg' : 'p-1 rounded-lg border-red-500 bg-red-200 text-red-500'} onChange={(e) => {setPeselValue(e.target.value)}} placeholder='PESEL' value={peselValue}></input>
                                <div className="tos flex flex-row justify-center gap-6">
                                    <input value={tosAccepted} className='p-1 rounded-lg' type="checkbox" placeholder='Name'></input>
                                    <span>I accept the TOS (Terms of Service)</span>
                                </div>
                            </form>
                        </div>
                    </div>  
                    )

                }    
                if (currentPage === 2){
                    return (
                    <div className="formbody flex flex-col gap-3 h-[40vh]">
                        <div className="formheader text-sky-900 font-medium text-lg">
                            Lorem ipsum
                        </div>
                        <div className="inputs flex flex-col gap-3">
                            <p>{nameValue}</p>
                            <p>{secondNameValue}</p>
                            <p>{emailValue}</p>
                            <p>{usernameValue}</p>
                            <p>{phoneNumberValue}</p>
                            <p>{peselValue}</p>
                        </div>
                    </div>   
                    )
                }
                else return <></>
}

