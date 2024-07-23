import React from 'react';
import Section from './Section';
import Column from './Column';
import Item from './Item';
import Manual from '../excel/Instuction Manual_Wheels EMI SFDC - 2023-24.xlsx';

function MainContent() {
  return (
    <div className="main-content">
      <Section title="Reference Documents">
        <Column>
        <Item text="Manual" link={Manual}/>
          <Item text="IMP Checkpoints" />
          <Item text="DE Instructions" />
          <Item text="TPD Comments" />
          <Item text="3 Months Banking Guidelines" highlighted />
          <Item text="Policy Details" />
          <Item text="ABB Calculation Sheet" />
          <Item text="CRIF Guideline" />
          {/* <Item text="Master ORP List" />
          <Item text="Dedupe Match Criteria" />
          <Item text="Base policy" /> */}
          <Item text="Basic policy guideline" />
          <Item text="Negative FI remark actionable" />
          <Item text="Credit Programs" />
          <Item text="List of Merged Banks" highlighted />
          <Item text="Karza actionable" />
        </Column>
      </Section>

      <Section title="New TW Policy">
        <Column>
          <Item text="Deviation Matrix - NACH" />
          <Item text="Deviation Matrix - DCC" />
          <Item text="Deviation Matrix - Electric Vehicle" />
          <Item text="Pre-disbursement checklist" />
          <Item text="Deferral Approval" />
            {/* <Item text="Main Dealer and Sub Dealer List" />
            <Item text="Stamp Duty Charges" />
            <Item text="Post-disbursement checklist" />
            <Item text="Disbursement checklist" /> */}
          <Item text="LOW DP scheme for Madhepura and Supaul" highlighted />
          <Item text="DMA and Sos Contact Details" />
          <Item text="Query Reasons" />
          <Item text="EV Discontinued Models List" />
          <Item text="Negative Area List" />
          <Item text="WOW-NTW" highlighted />
          <Item text="SFDC - Checklist - UND" highlighted />
          <Item text="SFDC - UND Solution Checklist" highlighted />
        </Column>
      </Section>

      {/* <Section title="CPA Support Files">
        <Column>
          <Item text="Active Branch List" />
          <Item text="FI Trigger Policy" />
          <Item text="Owned & Rented Documentation" />
          <Item text="Updates and Sample Format" highlighted />
          <Item text="Active, Blocked & Merged Banks" highlighted />
          <Item text="Cross Sell Calculator" highlighted />
          <Item text="TP Insurance Calculator" highlighted />
          <Item text="SFDC Query Header" highlighted />
        </Column>
      </Section> */}

      <Section title="Used TW Policy">
        <Column>
          <Item text="TPD Comments" />
          <Item text="PAN India RTO Charges" />
          <Item text="Policy Details" />
          <Item text="Underwriting & RTO Check List" />
          <Item text="Deferral/Exception Approvals" />
          <Item text="RTO Updates" />
          <Item text="RTO Pincode List" />
          <Item text="RTO CHALLAN MATRIX" highlighted />
          <Item text="Deviation Matrix" />
          <Item text="DISB Amount to Dealer (LAV)" />
          <Item text="Pre Disbursement Check List" />
          <Item text="Vehicle Particular" />
          <Item text="WEMI Repo sale case instructions" />
        </Column>
      </Section>

      <Section title="Piaggio E-Auto Rickshaw">
        <Column>
          <Item text="Policy Details" />
          <Item text="New EV Auto Rickshaw (Fixed Battery) Policy" />
          <Item text="Schemes" />
          <Item text="Scheme Details" />
          <Item text="Piaggio Master ORP List" />
        </Column>
      </Section>

      {/* <Section title="New Electric E-Rickshaw">
        <Column>
          <Item text="Important Check Points" highlighted />
          <Item text="Policy Details" />
          <Item text="Declaration Form" />
          <Item text="Declaration Form Sample" />
        </Column>
      </Section> */}

      {/* <Section title="Monthly Reports">
        <Column>
          <Item text="Incentive" />
          <Item text="Attendance" />
          <Item text="Early Left" highlighted />
          <Item text="Link to check pay slips" />
          <Item text="Performance Cycle Revised" />
          <Item text="QMS & ISMS Training" />
          <Item text="In Time Deduction" />
          <Item text="Sunday/Holiday Working" />
          <Item text="Skill Matrix" />
          <Item text="Consolidated Audit quality Feb'24" />
          <Item text="Daywise Audit quality report Mar'24" />
        </Column>
      </Section> */}
    </div>
  );
}

export default MainContent;
