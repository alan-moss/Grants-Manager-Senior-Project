import React, { useState } from 'react';
import Axios from 'axios'; //when adding something to the database
import { Form } from 'semantic-ui-react';
import '../../style.css';

export const AddProposal = () => {
  const [prop_num, setPropNum] = useState('');
  const [pre_prop_num, setPrePropNum] = useState(0);
  const [title, setTitle] = useState('');
  const [agency, setAgency] = useState('');

  //TBD how to get this
  const [fund_type, setFundType] = useState('');
//   console.log(fund_type);

  const [cfda, setCFDA] = useState(0);
  const [investigator, setInvestigator] = useState('');
  const [extension, setExtension] = useState(0);
  const [email, setEmail] = useState('');
  const [department_number, setDeptNum] = useState(0);
  const [department_name, setDeptName] = useState('');

  //TBD how to get this
  const [unit, setUnit] = useState('');

  const [amount_requested, setAmountRequested] = useState(0);

  //TBD how to get this
  const [pre_award_status, setPreAwardStatus] = useState('');

  //TBD how to set dates for these
  const [date_submitted, setDateSubmitted] = useState('');
//   console.log(date_submitted);
  const [date_of_notice, setDateOfNotice] = useState('');
  const [project_start, setProjectStart] = useState('');
  const [project_end, setProjectEnd] = useState('');

  const [human_compliance, setHumanCompliace] = useState('');
  const [animal_compliace, setAnimalCompliance] = useState('');
  const [recombinant_dna, setRecombinantDNA] = useState('');
  const [subcontractors, setSubcontractors] = useState('');
  const [index_number, setIndexNumber] = useState(0);
  const [amount_funded, setAmountFunded] = useState(0);
  const [grant_type, setGrantType] = useState('');
  const [category, setCategory] = useState('');
  const [sponsor_id, setSponsorID] = useState('');

  //TBD how to get this
  const [pre_award_poc, setPreAwardPOC] = useState('');
  const [post_award_poc, setPostAwardPOC] = useState('');

  const [contract_number, setContractNumber] = useState(0);
  const [indirect_cost, setIndirectCost] = useState(0);

  //TBD how to get this
  const [internal_approval, setInternalApproval] = useState('');
  const [certification_assurance, setCertificationAssurance] = useState('');
  const [financial_interest, setFinancialInterest] = useState('');
  const [rcr, setRCR] = useState('');

  const [archive_location, setArchiveLocation] = useState('');
  const [notes, setNotes] = useState('');

  const addProposal = () => {
    Axios.post('http://localhost:3001/addProposal', {
        prop_num: prop_num,
        pre_prop_num: pre_prop_num,
        title: title,
        agency: agency,
        fund_type: fund_type,
        cfda: cfda,
        investigator: investigator,
        extension: extension,
        email: email,
        department_number: department_number,
        department_name: department_name,
        unit: unit,
        amount_requested: amount_requested,
        pre_award_status: pre_award_status,
        date_submitted: date_submitted,
        date_of_notice: date_of_notice,
        project_start: project_start,
        project_end: project_end,
        human_compliance: human_compliance,
        animal_compliace: animal_compliace,
        recombinant_dna: recombinant_dna,
        subcontractors: subcontractors,
        index_number: index_number,
        amount_funded: amount_funded,
        grant_type: grant_type,
        category: category,
        sponsor_id: sponsor_id,
        pre_award_poc: pre_award_poc,
        post_award_poc: post_award_poc,
        contract_number: contract_number,
        indirect_cost: indirect_cost,
        internal_approval: internal_approval,
        certification_assurance: certification_assurance,
        financial_interest: financial_interest,
        rcr: rcr,
        archive_location: archive_location,
        notes: notes,
    }).then(console.log('success'));
  };

  return (
    <div>
      <h2 id='page-title'>
        Add a New Proposal
      </h2>
      <Form>
        <div id='add-proposal'>
          <div>
            <label>Proposal Number: </label>
            <input
              type='text'
              onChange={(event) => {
                setPropNum(event.target.value);
              }}
            />

            <label>Pre-Proposal Number: </label>
            <input
              type='number'
              onChange={(event) => {
                setPrePropNum(event.target.value);
              }}
            />

            <label>Title: </label>
            <input
              type='text'
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />

            <label>Agency: </label>
            <input
              type='text'
              onChange={(event) => {
                setAgency(event.target.value);
              }}
            />

            <label>Funding Type: </label>
            <select
              name='fund_type'
              id='fund_type'
              onChange={(event) => {
                setFundType(event.target.value);
              }}
            >
              <option value=''></option>
              <option value='federal'>Federal</option>
              <option value='state'>State</option>
              <option value='tribal'>Tribal</option>
              <option value='private'>Private</option>
            </select>

            <label>CFDA Number: </label>
            <input
              type='number'
              onChange={(event) => {
                setCFDA(event.target.value);
              }}
            />

            <label>Investigator: </label>
            <input
              type='text'
              onChange={(event) => {
                setInvestigator(event.target.value);
              }}
            />

            <label>Extension: </label>
            <input
              type='number'
              onChange={(event) => {
                setExtension(event.target.value);
              }}
            />

            <label>Email: </label>
            <input
              type='text'
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <label>Department Number: </label>
            <input
              type='number'
              onChange={(event) => {
                setDeptNum(event.target.value);
              }}
            />

            <label>Deparment Name: </label>
            <input
              type='text'
              onChange={(event) => {
                setDeptName(event.target.value);
              }}
            />

            <label>Unit: </label>
            <select
              name='unit'
              id='unit'
              onChange={(event) => {
                setUnit(event.target.value);
              }}
            >
              <option value=''></option>
              <option value='academic_affairs'>Academic Affairs</option>
              <option value='business_finance'>Business and Finance</option>
              <option value='cahss'>CAHSS</option>
              <option value='cpp'>CPP</option>
              <option value='chsph'>CHSPH</option>
              <option value='cstem'>CSTEM</option>
              <option value='diversity_inclusion'>Diversity and Inclusion</option>
              <option value='equal_opportunity'>
                Equal Opportunity Affirm Action
              </option>
              <option value='student_affairs'>Student Affairs</option>
              <option value='university_libraries'>University Libraries</option>
              <option value='university_college'>University College</option>
              <option value='presidents_office'>Preisident's Office</option>
              <option value='outreach_engagement'>Outreach and Engagement</option>
            </select>

            <label>Amount Requested: </label>
            <input
              type='number'
              onChange={(event) => {
                setAmountRequested(event.target.value);
              }}
            />

            <label>Pre Award Status: </label>
            <select
              name='preaward'
              id='preaward'
              onChange={(event) => {
                setPreAwardStatus(event.target.value);
              }}
            >
              <option value=''></option>
              <option value='pending'>Pending</option>
              <option value='funded'>Funded</option>
              <option value='not_funded'>Not Funded</option>
              <option value='additional'>Additional</option>
              <option value='awarded'>Awarded</option>
              <option value='cash_value'>Cash Value</option>
              <option value='pre_proposal'>Pre Proposal</option>
              <option value='invited'>Invited</option>
              <option value='not_invited'>Not Invited</option>
              <option value='no_cash_value'>No Cash Value</option>
              <option value='reduced'>Reduced</option>
              <option value='to_be_determined'>To be Determined</option>
              <option value='see_notes'>See Notes</option>
              <option value='not_accepted'>Not Accepted</option>
            </select>

            <label>Date Submitted: </label>
            <input
              type='date'
              onChange={(event) => {
                setDateSubmitted(event.target.value);
              }}
            />

            <label>Date of Notice: </label>
            <input
              type='date'
              onChange={(event) => {
                setDateOfNotice(event.target.value);
              }}
            />

            <label>Project Start: </label>
            <input
              type='date'
              onChange={(event) => {
                setProjectStart(event.target.value);
              }}
            />

            <label>Project End: </label>
            <input
              type='date'
              onChange={(event) => {
                setProjectEnd(event.target.value);
              }}
            />

            <label>Human Compliance: </label>
            <input
              type='text'
              onChange={(event) => {
                setHumanCompliace(event.target.value);
              }}
            />

            <label>Animal Compliance: </label>
            <input
              type='text'
              onChange={(event) => {
                setAnimalCompliance(event.target.value);
              }}
            />

            <label>Recombinant DNA: </label>
            <input
              type='text'
              onChange={(event) => {
                setRecombinantDNA(event.target.value);
              }}
            />

            <label>Subcontractors: </label>
            <input
              type='text'
              onChange={(event) => {
                setSubcontractors(event.target.value);
              }}
            />

            <label>Index Number: </label>
            <input
              type='number'
              onChange={(event) => {
                setIndexNumber(event.target.value);
              }}
            />

            <label>Amount Funded: </label>
            <input
              type='number'
              onChange={(event) => {
                setAmountFunded(event.target.value);
              }}
            />

            <label>Grant Type: </label>
            <input
              type='text'
              onChange={(event) => {
                setGrantType(event.target.value);
              }}
            />

            <label>Category: </label>
            <input
              type='text'
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
            <label>Pre Award POC: </label>
            <select
              name='pre_award_poc'
              id='pre_award_poc'
              onChange={(event) => {
                setPreAwardPOC(event.target.value);
              }}
            >
              <option value=''></option>
              <option value='charlene_alspach'>Charlene Alspach</option>
              <option value='kristyl_riddle'>Kristyl Riddle</option>
              <option value='ruth_galm'>Ruth Galm</option>
            </select>

            <label>Post Award POC: </label>
            <select
              name='post_award_poc'
              id='post_award_poc'
              onChange={(event) => {
                setPostAwardPOC(event.target.value);
              }}
            >
              <option value=''></option>
              <option value='charlene_alspach'>Charlene Alspach</option>
              <option value='danielle_desormier'>Danielle Desormier</option>
              <option value='nancy_miller'>Nancy Miller</option>
              <option value='michelle_siedenburg'>Michelle Siedenburg</option>
            </select>

            <label>Contract Number: </label>
            <input
              type='text'
              onChange={(event) => {
                setContractNumber(event.target.value);
              }}
            />

            <label>Indirect Cost: </label>
            <input
              type='number'
              onChange={(event) => {
                setIndirectCost(event.target.value);
              }}
            />

            <h3>Compliance Reqs</h3>
            <label>Internal Approval: </label>
            <select
              name='internal_approval'
              id='internal_approval'
              onChange={(event) => {
                setInternalApproval(event.target.value);
              }}
            >
              <option value=''></option>
              <option value='in_process'>In Process</option>
              <option value='need'>Need</option>
              <option value='na'>NA</option>
              <option value='complete'>Complete</option>
              <option value='see_pre_award_contact'>See Pre Award Contact</option>
              <option value='not_funded'>Not Funded</option>
              <option value='see_notes'>See Notes</option>
            </select>

            <label>Certification and Assurance: </label>
            <select
              name='certification_assurance'
              id='certification_assurance'
              onChange={(event) => {
                setCertificationAssurance(event.target.value);
              }}
            >
              <option value=''></option>
              <option value='in_process'>In Process</option>
              <option value='need'>Need</option>
              <option value='na'>NA</option>
              <option value='complete'>Complete</option>
              <option value='see_pre_award_contact'>See Pre Award Contact</option>
              <option value='not_funded'>Not Funded</option>
              <option value='see_notes'>See Notes</option>
            </select>

            <label>Financial Interest: </label>
            <select
              name='financial_interest'
              id='financial_interest'
              onChange={(event) => {
                setFinancialInterest(event.target.value);
              }}
            >
              <option value=''></option>
              <option value='in_process'>In Process</option>
              <option value='need'>Need</option>
              <option value='na'>NA</option>
              <option value='complete'>Complete</option>
              <option value='see_pre_award_contact'>See Pre Award Contact</option>
              <option value='not_funded'>Not Funded</option>
              <option value='see_notes'>See Notes</option>
            </select>

            <label>RCR: </label>
            <select
              name='rcr'
              id='rcr'
              onChange={(event) => {
                setRCR(event.target.value);
              }}
            >
              <option value=''></option>
              <option value='in_process'>In Process</option>
              <option value='need'>Need</option>
              <option value='na'>NA</option>
              <option value='complete'>Complete</option>
              <option value='see_pre_award_contact'>See Pre Award Contact</option>
              <option value='not_funded'>Not Funded</option>
              <option value='see_notes'>See Notes</option>
            </select>

            <label>Archive Location: </label>
            <input
              type='text'
              onChange={(event) => {
                setArchiveLocation(event.target.value);
              }}
            />

            <label>Notes: </label>
            <input
              type='text'
              onChange={(event) => {
                setNotes(event.target.value);
              }}
            />

            <Form.Button onClick={addProposal}> Submit Proposal</Form.Button>
          </div>
        </div>
      </Form>
    </div>
  );
};