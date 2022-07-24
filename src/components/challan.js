import React,{useEffect,useState} from 'react'
import logo from '../assests/logo.png';
import banklogo from '../assests/banklogo.svg'
import '../App.css';
import converter from 'number-to-words';

function Challan() {
  const [data, setData] = useState();
  const [fees,setFees] = useState({});




  useEffect(() => {
      let a = localStorage.getItem('data');
      // setDepositeSlip(depositeSlipValue + 1);
      console.log(a);
      setData(JSON.parse(a))
  }, [])
  
  console.log(data,"=============")

  let feeTypes = data ? data.feesTypes : '';

  console.log('feesTypes==>',feeTypes);




  const depositeSlipValue = localStorage.getItem('depositeSlip')

  console.log('depositeSlip====>',depositeSlipValue)


  let totalFees = 0;
  for (const key in feeTypes) {

    console.log(`${key}: ${feeTypes[key]}`);
    totalFees += feeTypes[key];
   
}

console.log('totalfees===>',totalFees);

const convertData = converter.toWords(totalFees);

console.log(convertData)

  // useEffect(() => {
  //   window.print()
  // }, [data])
  
  return (
    <div>
      <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n        .style-caption {\n            width: 35%;\n            float: left;\n        }\n\n        .style-caption-value {\n            margin-left: 35%;\n        }\n    " }} />
      <style type="text/css" media="print" dangerouslySetInnerHTML={{ __html: "\n        @page {\n            size: landscape;\n        }\n    " }} />
      <form name="form1" method="post" action="./FeePaymentChallan_Layout.aspx?cookie=Challan_No" id="form1">
        <div>
          <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" defaultValue="6E06207D" />
        </div>
        <div>
          <div id="divFeePayment" style={{ border: 'medium solid grey', fontFamily: '"Times New Roman", Times, serif', fontSize: 'smaller', width: '33%', float: 'left', height: '700px', position: 'relative' }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img id="imgLogo" src={logo} style={{ height: '100px', borderWidth: '0px' }} />
            </div>
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
              <div style={{ textAlign: 'center' }}>
                <h5>BANK VOUCHER (Bank Copy)</h5>
              </div>
              <div className="divBankLogo" style={{ width: '100%', textAlign: 'center' }}>
                <img  src={banklogo} style={{ borderWidth: '0px', width: '50%' }} />
              </div>
              <div id="lblBank_Account_No" style={{ textAlign: 'center' }}>
                <b>Account #
                  <span>0042-7901-4053-03 </span></b>
              </div>
              <br />
              <div>
                <div>
                  <div id="lblChallan_No" style={{ width: '32%', float: 'left', fontSize: 'medium' }}>
                    Deposit Slip #
                  </div>
                  <div id="lblChallan_No" style={{ borderStyle: 'ridge', borderWidth: 'thin', width: '65%', float: 'right', font: 'bolder', fontWeight: 'bolder', fontSize: 'medium' }}>
                    &nbsp;
                    <span>{depositeSlipValue}</span>
                  </div>
                </div>
                <div style={{ width: '100%', overflow: 'hidden' }}>
                </div>
                <div id="lblChallan_Date">
                  <div className="style-caption">
                    <b>Challan Post Date</b>
                  </div>
                  <div style={{ width: '65%', float: 'right' }}>
                    <b>
                      <span>{data ? data.newDate : ''}</span></b>
                  </div>
                </div>
                <span id="lblMessage" />
              </div>
              <div id="lblBank_Account_Title">
                <div className="style-caption">
                  <b>Credit:</b>
                </div>
                <div style={{ width: '65%', float: 'right' }}>
                  <b>
                    <span >FM Public School</span></b>
                </div>
              </div>
              <div style={{ width: '100%', overflow: 'hidden' }}>
                <div className="style-caption">
                </div>
              </div>
              <div>
                <div className="style-caption">
                  Student Name
                </div>
                <div style={{ width: '65%', textAlign: 'left', borderBottomStyle: 'solid', borderBottomWidth: 'thin' }} className="style-caption-value">
                  <span id="lblStd_Name_Bank">{data?data.name:""}</span>
                </div>
              </div>
              <div>
                <div className="style-caption">
                  <span id="lblReg_Adm_No_Title_Bank">Class</span>
                </div>
                <div style={{ width: '65%', textAlign: 'left', borderBottomStyle: 'solid', borderBottomWidth: 'thin' }} className="style-caption-value">
                  <span id="lblReg_Adm_No_Bank">{data ? data.class : ''}</span>
                </div>
              </div>
              <div>
                <div className="style-caption">
                Registration Number
                </div>
                <div style={{ width: '65%', textAlign: 'left', borderBottomStyle: 'solid', borderBottomWidth: 'thin' }} className="style-caption-value">
                  <span id="lblContact_No_Bank">{data ? data.registrationNumber : ''}</span>
                </div>
              </div>
              <div style={{ marginTop: '1%' }}>
                <div className="style-caption">
                  Payment Mode
                </div>
                <div style={{ width: '65%', float: 'left' }}>
                  <span id="lblPayment_Mode_Bank">Cash</span>
                </div>
              </div>
              <div style={{ marginTop: '1%' }}>
                <div className="style-caption">
                  <span id="lblInstrument_Name_Bank" />
                </div>
                <div style={{ width: '65%', float: 'left' }}>
                  <span id="lblInstrument_No_Bank" />
                </div>
              </div>
              <div id="divPayment_Detail_Bank">
                <div>
                  <table cellSpacing={0} rules="all" border={1} id="dgvPayment_Detail_Bank" style={{ fontSize: 'Smaller', borderCollapse: 'collapse' }}>
                    <tbody><tr style={{borderWidth:'1px'}}>
                      <th scope="col" style={{ width: '2000px' }}>PARTICULARS</th><th scope="col">Amount</th>
                    </tr>
                        {/* <td>Tuition Fee</td><td align="right">1,000</td> */}
                        
                         {
                          Object.keys(feeTypes).map((val,index)=>{
                            return(
                            <>
                            {
                              feeTypes[val] !== 0 && 
                              <tr key={index} style={{border : "1px solid"}}>
                                    <td>{val.replace('_',' ').toUpperCase() }</td><td align="right">{feeTypes[val]}</td>
                                  <br/>
                            </tr>
                            }
                      

                            </>
                            )
                          })
                         }

                    </tbody></table>
                </div>
                <div>
                  <div style={{ float: 'left', textAlign: 'right' }}>
                    <b>Total Amount Payable</b>
                  </div>
                  <div style={{ float: 'right', textAlign: 'right', borderBottomStyle: 'double' }}>
                    <b>
                      <span id="lblTotal_Fee_Amount_Bank" style={{ textDecoration: 'none' }}>{totalFees}</span></b>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div style={{ fontSize: 'smaller' }}>
                <div>
                  <b><u>Amount in words</u></b>
                </div>
                <div>
                  <b>Rupees
                    <span id="lblAmount_in_Words_Bank"> {convertData} </span>
                    Only.
                  </b>
                </div>
              </div>
              <div id="divNotes_Bank">
                <div>
                  <table cellSpacing={0} border={0} id="dgvNotes_Bank" style={{ borderStyle: 'None', fontSize: 'XX-Small', borderCollapse: 'collapse' }}>
                    <tbody><tr>
                      <th scope="col">&nbsp;</th><th align="left" scope="col" style={{ fontWeight: 'bold' }}>Note:</th>
                    </tr><tr>
                        <td valign="top">1)</td><td>Kindly deposit the amount using THIS CHALLAN only at any branch of Habib Bank Limited.</td>
                      </tr><tr>
                        <td valign="top">2)</td><td>Fee can only be deposited through cash, Pay order, Demand Draft.</td>
                      </tr><tr>
                        <td valign="top">3)</td><td>Late fee will be charged on the payment received after due date.</td>
                      </tr><tr>
                        <td valign="top">4)</td><td>Only amount specified in the fee voucher is acceptable at the Bank. Altered fee voucher is not acceptable.</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
            <div className='signature' style={{ position: 'absolute', bottom: '5px', fontSize: 'xx-small', width: '97%' }}>
              <div style={{ display: 'inline', borderTopStyle: 'solid', borderTopWidth: 'thin', width: '10%' }}>&nbsp;STUDENT SIGNATURE&nbsp;</div>
              <div style={{ display: 'inline', borderTopStyle: 'solid', borderTopWidth: 'thin', marginLeft: '25%' }}>&nbsp;TELLER STAMP SIGNATURE&nbsp;</div>
            </div>
          </div>
          <div id="divFeePayment" style={{ border: 'medium solid grey', fontFamily: '"Times New Roman", Times, serif', fontSize: 'smaller', width: '33%', display: 'inline-block', marginLeft: '4px', height: '700px', position: 'relative' }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img id="imgLogo" src={logo} style={{ height: '100px', borderWidth: '0px' }} />
            </div>
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
              <div style={{ textAlign: 'center' }}>
                <h5>BANK VOUCHER (School Copy)</h5>
              </div>
              <div className="divBankLogo" style={{ width: '100%', textAlign: 'center' }}>
                <img  src={banklogo} style={{ borderWidth: '0px', width: '50%' }} />
              </div>
              <div id="lblBank_Account_No" style={{ textAlign: 'center' }}>
                <b>Account #
                  <span >0042-7901-4053-03 </span></b>
              </div>
              <br />
              <div>
                <div>
                  <div id="lblChallan_No" style={{ width: '32%', float: 'left', fontSize: 'medium' }}>
                    Deposit Slip #
                  </div>
                  <div id="lblChallan_No" style={{ borderStyle: 'ridge', borderWidth: 'thin', width: '65%', float: 'right', font: 'bolder', fontWeight: 'bolder', fontSize: 'medium' }}>
                    &nbsp;
                    <span>{depositeSlipValue}</span>
                  </div>
                </div>
                <div style={{ width: '100%', overflow: 'hidden' }}>
                </div>
                <div id="lblChallan_Date">
                  <div className="style-caption">
                    <b>Date</b>
                  </div>
                  <div style={{ width: '65%', float: 'right' }}>
                    <b>
                    <span>{data ? data.newDate : ''}</span></b>
                  </div>
                </div>
                <span id="Label1" />
              </div>
              <div id="lblBank_Account_Title">
                <div className="style-caption">
                  <b>Credit:</b>
                </div>
                <div style={{ width: '65%', float: 'right' }}>
                  <b>
                    <span >FM Public School</span></b>
                </div>
              </div>
              <div style={{ width: '100%', overflow: 'hidden' }}>
                <div className="style-caption">
                </div>
              </div>
              <div>
                <div className="style-caption">
                  Student Name
                </div>
                <div style={{ width: '65%', textAlign: 'left', borderBottomStyle: 'solid', borderBottomWidth: 'thin' }} className="style-caption-value">
                  <span id="lblStd_Name_Institute">{data ? data.name :"" }</span>
                </div>
              </div>
              <div>
                <div className="style-caption">
                  <span id="lblReg_Adm_No_Title_Institute">Class</span>
                </div>
                <div style={{ width: '65%', textAlign: 'left', borderBottomStyle: 'solid', borderBottomWidth: 'thin' }} className="style-caption-value">
                  <span id="lblReg_Adm_No_Institute">{data ? data.class : ""}</span>
                </div>
              </div>
              <div>
                <div className="style-caption">
                  Registration Number
                </div>
                <div style={{ width: '65%', textAlign: 'left', borderBottomStyle: 'solid', borderBottomWidth: 'thin' }} className="style-caption-value">
                  <span id="lblContact_No_Institute">{data ? data.registrationNumber : ''}</span>
                </div>
              </div>
              <div style={{ marginTop: '1%' }}>
                <div className="style-caption">
                  Payment Mode
                </div>
                <div style={{ width: '65%', float: 'left' }}>
                  <span id="lblPayment_Mode_Institute">Cash</span>
                </div>
              </div>
              <div style={{ marginTop: '1%' }}>
                <div className="style-caption">
                  <span id="lblInstrument_Name_Institute" />
                </div>
                <div style={{ width: '65%', float: 'left' }}>
                  <span id="lblInstrument_No_Institute" />
                </div>
              </div>
              <div id="divPayment_Detail_Institute">
                <div>
                  <table cellSpacing={0} rules="all" border={1} id="dgvPayment_Detail_Institute" style={{ fontSize: 'Smaller', borderCollapse: 'collapse' }}>
                    <tbody><tr style={{borderWidth:'1px'}}>
                      <th scope="col" style={{ width: '500px' }}>PARTICULARS</th><th scope="col">Amount</th>
                    </tr>
                        {/* <td>Tuition Fee</td><td align="right">1,000</td> */}
                        {
                          Object.keys(feeTypes).map((val,index)=>{
                            return(
                            <>
                            {
                              feeTypes[val] !== 0 && 
                              <tr key={index} style={{border : "1px solid"}}>
                                    <td>{val.replace('_',' ').toUpperCase()}</td><td align="right">{feeTypes[val]}</td>
                                  <br/>
                            </tr>
                            }
                      

                            </>
                            )
                          })
                         }
                  
                    </tbody></table>
                </div>
                <div>
                  <div style={{ float: 'left', textAlign: 'right' }}>
                    <b>Total Amount Payable</b>
                  </div>
                  <div style={{ float: 'right', textAlign: 'right', borderBottomStyle: 'double' }}>
                    <b>
                      <span id="lblTotal_Fee_Amount_Institute">{totalFees}</span></b>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div style={{ fontSize: 'smaller' }}>
                <div>
                  <b><u>Amount in words</u></b>
                </div>
                <div>
                  <b>Rupees
                    <span id="lblAmount_in_Words_Institute"> {convertData} </span>
                    Only.
                  </b>
                </div>
              </div>
              <div id="divNotes_Institute">
                <div>
                  <table cellSpacing={0} border={0} id="dgvNotes_Institute" style={{ borderStyle: 'None', fontSize: 'XX-Small', borderCollapse: 'collapse' }}>
                    <tbody><tr>
                      <th scope="col">&nbsp;</th><th align="left" scope="col" style={{ fontWeight: 'bold' }}>Note:</th>
                    </tr><tr>
                        <td valign="top">1)</td><td>Kindly deposit the amount using THIS CHALLAN only at any branch of Habib Bank Limited.</td>
                      </tr><tr>
                        <td valign="top">2)</td><td>Fee can only be deposited through cash, Pay order, Demand Draft.</td>
                      </tr><tr>
                        <td valign="top">3)</td><td>Late fee will be charged on the payment received after due date.</td>
                      </tr><tr>
                        <td valign="top">4)</td><td>Only amount specified in the fee voucher is acceptable at the Bank. Altered fee voucher is not acceptable.</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div id="divAlternatePaymentChannel_Institute" style={{ marginLeft: '15%', marginRight: '15%', marginTop: '1%' }}>
                <div>
                </div>
              </div>
              <div className='signature' style={{ position: 'absolute', bottom: '5px', fontSize: 'xx-small', width: '97%' }}>
                <div style={{ display: 'inline', borderTopStyle: 'solid', borderTopWidth: 'thin', width: '10%' }}>&nbsp;STUDENT SIGNATURE&nbsp;</div>
                <div style={{ display: 'inline', borderTopStyle: 'solid', borderTopWidth: 'thin', marginLeft: '25%' }}>&nbsp;TELLER STAMP SIGNATURE&nbsp;</div>
              </div>
            </div>
          </div>
          <div id="divFeePayment" style={{ border: 'medium solid grey', fontFamily: '"Times New Roman", Times, serif', fontSize: 'smaller', width: '33%', display: 'inline-block', marginLeft: '4px', height: '700px', position: 'relative' }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img id="imgLogo" src={logo} style={{ height: '100px', borderWidth: '0px' }} />
            </div>
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
              <div style={{ textAlign: 'center' }}>
                <h5>BANK VOUCHER (Student Copy)</h5>
              </div>
              <div className="divBankLogo" style={{ width: '100%', textAlign: 'center' }}>
                <img  src={banklogo} style={{ borderWidth: '0px', width: "50%" }} />
              </div>
              <div id="lblBank_Account_No" style={{ textAlign: 'center' }}>
                <b>Account #
                  <span>0042-7901-4053-03 </span></b>
              </div>
              <br />
              <div>
                <div>
                  <div id="lblChallan_No" className="style-caption" style={{ width: '32%', float: 'left', fontSize: 'medium' }}>
                    Deposit Slip #
                  </div>
                  <div id="lblChallan_No" style={{ borderStyle: 'ridge', borderWidth: 'thin', width: '65%', float: 'right', font: 'bolder', fontWeight: 'bolder', fontSize: 'medium' }}>
                    &nbsp;
                    <span style={{ display: 'inline-block', borderStyle: 'None' }}>{depositeSlipValue}</span>
                  </div>
                </div>
                <div style={{ width: '100%', overflow: 'hidden' }}>
                </div>
                <div id="lblChallan_Date">
                  <div className="style-caption">
                    <b>Date</b>
                  </div>
                  <div style={{ width: '65%', float: 'right' }}>
                    <b>
                      <span >{data ? data.newDate : ""}</span></b>
                  </div>
                </div>
                <span id="Label2" />
              </div>
              <div id="lblBank_Account_Title">
                <div className="style-caption">
                  <b>Credit:</b>
                </div>
                <div style={{ width: '65%', float: 'right' }}>
                  <b>
                    <span>FM Public School</span></b>
                </div>
              </div>
              <div style={{ width: '100%', overflow: 'hidden' }}>
                <div className="style-caption">
                </div>
              </div>
              <div>
                <div className="style-caption">
                  Student Name
                </div>
                <div style={{ width: '65%', textAlign: 'left', borderBottomStyle: 'solid', borderBottomWidth: 'thin' }} className="style-caption-value">
                  <span id="lblStd_Name_Student">{data ? data.name : ''}</span>
                </div>
              </div>
              <div>
                <div className="style-caption">
                  <span id="lblReg_Adm_No_Title_Student">Class</span>
                </div>
                <div style={{ width: '65%', textAlign: 'left', borderBottomStyle: 'solid', borderBottomWidth: 'thin' }} className="style-caption-value">
                  <span id="lblReg_Adm_No_Student">{data ? data.class : ""}</span>
                </div>
              </div>
              <div>
                <div className="style-caption">
                  Registration Number.
                </div>
                <div style={{ width: '65%', textAlign: 'left', borderBottomStyle: 'solid', borderBottomWidth: 'thin' }} className="style-caption-value">
                  <span id="lblContact_No_Student">{data ? data.registrationNumber : ''}</span>
                </div>
              </div>
              <div style={{ marginTop: '1%' }}>
                <div className="style-caption">
                  Payment Mode
                </div>
                <div style={{ width: '65%', float: 'left' }}>
                  <span id="lblPayment_Mode_Student">Cash</span>
                </div>
              </div>
              <div style={{ marginTop: '1%' }}>
                <div className="style-caption">
                  <span id="lblInstrument_Name_Student" />
                </div>
                <div style={{ width: '65%', float: 'left' }}>
                  <span id="lblInstrument_No_Student" />
                </div>
              </div>
              <div id="divPayment_Detail_Student">
                <div>
                  <table cellSpacing={0} rules="all" border={1} id="dgvPayment_Detail_Student" style={{ fontSize: 'Smaller', borderCollapse: 'collapse' }}>
                    <tbody><tr style={{borderWidth:'1px'}}>
                      <th scope="col" style={{ width: '500px' }}>PARTICULARS</th><th scope="col">Amount</th>
                    </tr>
                    {
                          Object.keys(feeTypes).map((val,index)=>{
                            return(
                            <>
                            {
                              feeTypes[val] !== 0 && 
                                    <tr key={index} style={{border : "1px solid"}}>
                                    <td>{val.replace("_", " ").toUpperCase()}</td><td align="right">{feeTypes[val]}</td>
                                  <br/>
                            </tr>
                            }
                      

                            </>
                            )
                          })
                         }
                  
                      
                    
                    </tbody></table>
                </div>
                <div>
                  <div style={{ float: 'left', textAlign: 'right' }}>
                    <b>Total Amount Payable</b>
                  </div>
                  <div style={{ float: 'right', textAlign: 'right', borderBottomStyle: 'double' }}>
                    <b>
                      <span id="lblTotal_Fee_Amount_Student">{totalFees}</span></b>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div style={{ fontSize: 'smaller' }}>
                <div>
                  <b><u>Amount in words</u></b>
                </div>
                <div>
                  <b>Rupees
                    <span id="lblAmount_in_Words_Student"> {convertData} </span>
                    Only.
                  </b>
                </div>
              </div>
              <div id="divNotes_Student">
                <div>
                  <table cellSpacing={0} border={0} id="dgvNotes_Student" style={{ borderStyle: 'None', fontSize: 'XX-Small', borderCollapse: 'collapse' }}>
                    <tbody><tr>
                      <th scope="col">&nbsp;</th><th align="left" scope="col" style={{ fontWeight: 'bold' }}>Note:</th>
                    </tr><tr>
                        <td valign="top">1)</td><td>Kindly deposit the amount using THIS CHALLAN only at any branch of Habib Bank Limited.</td>
                      </tr><tr>
                        <td valign="top">2)</td><td>Fee can only be deposited through cash, Pay order, Demand Draft.</td>
                      </tr><tr>
                        <td valign="top">3)</td><td>Late fee will be charged on the payment received after due date.</td>
                      </tr><tr>
                        <td valign="top">4)</td><td>Only amount specified in the fee voucher is acceptable at the Bank. Altered fee voucher is not acceptable.</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div id="divAlternatePaymentChannel_Student" style={{ marginLeft: '15%', marginRight: '15%', marginTop: '1%' }}>
                <div>
                </div>
              </div>
              <div className='signature' style={{ position: 'absolute', bottom: '5px', fontSize: 'xx-small', width: '97%' }}>
                <div style={{ display: 'inline', borderTopStyle: 'solid', borderTopWidth: 'thin', width: '10%' }}>&nbsp;STUDENT SIGNATURE&nbsp;</div>
                <div style={{ display: 'inline', borderTopStyle: 'solid', borderTopWidth: 'thin', marginLeft: '25%' }}>&nbsp;TELLER STAMP SIGNATURE&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

}

export default Challan