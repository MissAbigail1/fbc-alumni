import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer, FileDown, FileText } from 'lucide-react';

function ConstitutionalBylaws() {
  const navigate = useNavigate();
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  // Function to render text with smart formatting
  const renderFormattedContent = (text) => {
    let isBylaws = false;

    return text.split('\n').map((line, index) => {
      const trimmed = line.trim();

      // Skip empty lines
      if (!trimmed) {
        return <div key={index} className="h-2" />;
      }

      // Skip the redundant document titles at the beginning of the text
      if (['Constitution and By-Laws', 'FOURAH BAY COLLEGE', 'Alumni Association', 'Revised', '2023'].includes(trimmed) && index < 10) {
        return null;
      }

      // BY-LAWS section divider
      if (trimmed === 'BY-LAWS' || trimmed === 'By-Laws') {
        isBylaws = true;
        return (
          <div key={index} id="bylaws-title" className="my-12 text-center scroll-mt-20 print:my-8">
            <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-0.5 bg-fbc-gold"></div>
              <h2 className="text-3xl font-serif font-semibold text-fbc-green px-4 tracking-wide uppercase">BY-LAWS</h2>
              <div className="w-12 h-0.5 bg-fbc-gold"></div>
            </div>
          </div>
        );
      }

      // Article headers (e.g. "Article I — Name")
      if (/^Article\s+[IVX]+/i.test(trimmed)) {
        const match = trimmed.match(/^Article\s+([IVX]+)/i);
        const roman = match ? match[1].toLowerCase() : '';
        const elementId = isBylaws ? `bylaws-${roman}` : `const-${roman}`;

        return (
          <div key={index} id={elementId} className="mt-10 mb-6 scroll-mt-20 print:mt-8 print:mb-4">
            <h3 className="font-serif text-xl font-bold text-fbc-green">{trimmed}</h3>
            <div className="h-[1px] w-full bg-gradient-to-r from-fbc-gold via-fbc-gold/30 to-transparent mt-2"></div>
          </div>
        );
      }

      // Section headers (e.g. "Section 1. Eligibility")
      if (/^Section\s+\d+/.test(trimmed)) {
        return (
          <div key={index} className="mt-8 mb-4 pl-3 border-l-2 border-fbc-gold/50 print:mt-6 print:mb-3">
            <h4 className="text-base font-serif font-bold text-gray-900">{trimmed}</h4>
          </div>
        );
      }

      // Regular text
      const isListLike = /^\([a-z\d]\)|^\d+\./.test(trimmed);
      return (
        <p
          key={index}
          className={`text-gray-600 leading-relaxed text-sm md:text-base font-sans ${
            isListLike ? 'pl-6 mb-2' : 'mb-4 text-justify'
          }`}
        >
          {trimmed}
        </p>
      );
    });
  };

  const constitutionText = `Constitution and By-Laws
FOURAH BAY COLLEGE
Alumni Association
Revised
2023

Article I — Name

The name of this organisation is the Fourah Bay College Alumni Association (hereinafter the "Association").

Article II — Objects

The purposes of this Association are to promote the best interests and welfare of Fourah Bay College; to fully acquaint the membership of the Association with the progress and needs of their Alma Mater; to promote and enhance higher education in Sierra Leone in general and Fourah Bay College in particular; to raise funds for the development of Fourah Bay College; and to encourage loyalty to the University and closer bonds of fellowship among its alumni.

Article III — Membership

Section 1. Eligibility

The membership in the Association shall consist of persons who have been formally enrolled at the Fourah Bay College for study in one of the Faculties, Institutes, Departments or Units to pursue a degree, diploma and certificate or licentiate course.

Section 2. Types

The By-Laws of the Association may provide for other classes of membership in the Association.

Article IV — Government

Section 1. Officers

The officers of the Association shall consist of a President, Vice President, Secretary General, Public Relations Officer, Social Secretary and Treasurer. They shall be elected by the membership for two-year terms in accordance with the By-Laws.

Section 2. Executive Committee

There shall be an Executive Committee of the Association, the personnel of which shall be determined by the By-Laws of the Association. This Committee shall have such duties and powers as are laid down in this Constitution and the By-Laws.

Article V — Meetings

There shall be an annual general meeting of the members of the Association. Regular or special meetings of the membership shall be convened as and when necessary by the Executive Committee. The times and places for said meetings shall be set by the Executive Committee.

All meetings of the Association shall be in accordance with the By-Laws.

Article VI — Amendments

The Constitution may be amended, at any annual meeting of the Association by a two-thirds vote of the members present and voting, provided notice of said amendment has been circulated to the members at least 30 days prior to said meeting.

BY-LAWS

Article I — Members

Section 1. Alumni Members

Persons who have been formally enrolled at the Fourah Bay College for study in one of the Faculties, Institutes, Departments or Units to pursue a degree, diploma and certificate or licentiate course are eligible to become Alumni Members of the Association.

Section 2. Associate Members

Persons who do not qualify for Alumni Membership, but who are friends of and interested in the welfare of Fourah Bay College, may become Associate Members of the Fourah Bay College Alumni Association. Such members are not eligible to hold office or to vote for candidates for the Executive Committee.

Article II — Dues

Section 1. Annual Dues

All eligible persons may join the Fourah Bay College Alumni Association by paying a registration fee and annual dues fixed by the members from time to time at the Annual General Meeting. The initial membership will begin in the month in which such payment is received and will continue for 12 months. Subsequent payments are due on the anniversary dates which follow and will be considered as dues for the next 12-month period immediately thereafter.

Section 2. Life Dues

Any eligible person may choose to become a Life Member of the Association by paying a fee as stipulated by members of this Association. Provision may be made for the Life Membership dues to be paid in annual amounts for a period to be determined by the Executive Committee.

Article III — Officers

Section 1. Election

The officers of the Association shall be the President, Vice President, Secretary, Public Relations Officer, Social Secretary and Treasurer. These officers shall be elected by the members for two-year terms. These officers shall assume office on July 1 and serve through June 30 of the following year.

Section 2. Method of Electing Officers

The members shall select five members of the Association who shall serve as the nominating committee for officers of the Association at a meeting prior to the Annual General Meeting. The nominating committee shall receive nominations for all the positions in the Executive Committee and submit their report at the appropriate business meeting for the election of officers. Additional nominations may be made from the floor by any member at the Annual General Meeting. The nominating committee shall conduct elections of officers at the Annual General Meeting.

Section 3. Filling Unexpired Terms

Should the President be unable to fulfil his/her term for any reason, the nominating committee shall appoint the Vice President to complete the unexpired term of the President. Should the Vice President or Treasurer be unable to fulfil his/her term for any reason, the nominating committee shall submit to the membership for approval the name of a member, for that position.

Article IV — Executive Committee

There shall be an Executive Committee of the Association consisting of the officers of the Association, the immediate past president of the Association, Auditor and two ex-Officio members.

The Executive Committee shall have such duties and powers as may be delegated to it by the members of the Association. Meetings of this committee may be called at any time deemed necessary by the President of the Association.

The Executive Committee shall be the governing body of the Association. Subject always to the overriding power of the General Meeting, the Executive Committee shall have power to take decisions on all issues affecting the running of the Association.

The Executive Committee shall have the power to appoint sub-committees of its members for any purpose and to co-opt any member of the Association to serve on the sub-committee.

The quorum for an Executive Committee meeting shall be 5 members.

Members having served two consecutive three-year terms shall be ineligible for membership on the Executive Committee for at least one year, except as provided for elsewhere in the Constitution or By-Laws.

Article V — Duties of Officers

Section 1. President

It shall be the duty of the President to:
(a) direct the affairs of the Association;
(b) preside at all meetings of the Association or of the Executive Committee at which he/she is present and to maintain discipline and order at such meeting;
(c) direct the Secretary General to summon the general meetings of the Association or meetings of the Executive Committee, provided in the absence of the Secretary he shall personally summon the meetings;
(d) in the event of an equality of votes at any meeting at which he/she presides, have a second casting vote;
(e) perform all other duties pertaining to the office under this Constitution;
(f) protect and uphold this Constitution in the interest of the solidarity of the Association.

Section 2. Vice-President

It shall be the duty of the Vice-President to:
(a) assist the President in the performance of his duties under this constitution;
(b) in the absence or incapacity of the President, perform all the duties of the President.

Section 3. Secretary General

The Secretary General shall:
(a) record, in the books provided for the purpose, the minutes of General Meetings or Executive Committee Meetings of the Association;
(b) prepare, in consultation with the President, the order of business of every meeting of the Association or the Executive Committee,
(c) provided a matter not included in the Agenda may be transacted if the President or the General Meeting, in the case of the Executive Committee, the Committee so requires;
(f) keep and maintain the register of members;
(g) have authority to operate the budget;
(h) perform all other duties pertaining to the office under this Constitution;
(i) perform such duties as the President, Executive Committee or General Meeting may direct.

Section 4. Treasurer

It shall be the duty of the Treasurer to:
(a) receive all monies paid to the Association and to issue copies of a receipts for all such monies;
(b) pay into the Association's bank account within seven days after the receipt thereof all monies received from any person for and on behalf of the Association;
(c) pay out, subject to the provisions of this section, all monies authorized to be paid out of the Association's fund, provided he/she does not pay out any bill drawn on the Association except upon a written order signed by the President;
(d) to keep an account and up-to-date account of all monies received or paid out by him/her;
(e) to render at the Annual Conference an income and expenditure account for the previous year, provided the General Meeting or the Executive Committee may direct the Treasurer to render such account for any period of the year.

Section 5. Publicity/Social Secretary

The Publicity/Social Secretary, shall perform in relation to the Association, such public relations and publicity functions as are necessary for the attainment by the Association of its objectives and, in particular, without prejudice to the foregoing provision, it shall be his/her duty to:
(a) educate the public on the objectives of the Association;
(b) establish contact with overseas branches of the Association in pursuance of the objectives of the Association;
(c) organize and arrange all social functions for the Association;

Article VI — Auditors

Auditors shall be appointed by the members at the Annual General Meeting and shall serve for a period of one year.

It shall be the duty of the Auditors to audit the books and accounts of the Association and to present a report to the Annual General Meeting.

Article VII — Meetings

Section 1. General Meetings of the Association

The Annual General Meeting shall be referred to as the Annual Conference of the Association and shall be held in March, or at such other time and place as the Executive Committee shall decide.

Section 2. The Agenda of the meeting shall include:

(a) Presentation of the audit report
(b) Treasurer's Financial Statement
(c) The President's report
(d) Election of Officers

Section 3. These shall be three meetings per annum, one of which shall be the Annual General Meeting.

Section 4. Any other General Meeting shall be an Emergency General Meeting and shall be held at such time and place as the Executive Committee or President shall appoint.

Section 5. A Notice of not less than 30 (thirty) days shall be given for the Annual Conference.

Section 6. The quorum for any General Meeting shall be 20% (twenty percent) of paid-up members.

Section 7. In the absence of the President and Vice-President the members present shall elect one of their numbers to preside.

Article VIII — Registration Fees and Dues

Section 1. The registration fee shall be Le50,000 (Fifty Thousand Leones) or in New Leones to be paid before the applicant can qualify as a member.

Section 2. The membership dues shall be Le150,000 (One Hundred and Fify Leones) per annum, payable semi-annually on the first day of xxxx and of yyyy.

Article IX — Nominations

Section 1. Nominating Committee

The Association shall, two months before before July 31 of each year, appoint a committee to receive nominations of candidates for the following positions: President, Vice President, Secretary General, Publicity/Social Secretary and Treasurer.

Section 2. Elections

The steps in the nomination and election process are:

1. The Nominating Committee should receive nominations for the above positions of the Executive Committee in writing at least 14 days before the Annual General Meeting.
2. Voting for members of the Executive Committee shall be by secret ballot. The candidates receiving a majority of the votes shall be declared elected to their respective offices by the Nominating Committee.
3. The Nominating Committee shall conduct elections at the Annual General Meeting.

Section 3. Election Results

The Nominating Committee shall declare the results of the elections and its decision shall be final.

Article X — Committees

Section 1. Fellowship Activities Committee

This Committee shall promote acquaintance and friendship among the members, promote participation by members in organized recreational and social activities and do such work in pursuance of the general objects of the Association as may be assigned by the President or the Executive Committee.

Section 2. Magazine Committee

This Committee shall stimulate reader interest in the Association Magazine; sponsor a magazine week; arrange for brief monthly reviews of the magazine or regular Association programme, encourage the use of the magazine for non-Alumni speakers; secure special subscription for libraries, hospitals, schools and other reading rooms; send news items and photographs to the editor of the magazine and in other ways make the magazine of service to the Association members and non-members.

Section 3. Fund Raising Committee

This Committee shall promote the raising of funds for the Association.

Section 4. Public Relations Committee

This Committee shall devise and carry into effect (1) plans to give the public generally information about the Alumni Association, its history; objects and scope and (2) to secure proper publicity for the Association.

Article XI — Affiliate Alumni Groups

Section 1. Formation and Support

The formation of affiliate alumni groups (groups based on Faculties or Departments at Fourah Bay College) is not encouraged by the Association. The Association will however offer basic support in the areas of organization, communication, dues data entry and deposit, and record-keeping to all affiliate groups.

Section 2. Rules and Regulations

Affiliate alumni groups may adopt such rules and regulations for running their groups as they see fit, as long as they do not conflict with the provisions of the Constitution and Bylaws of the Alumni Association.

Section 3. Rights and Responsibilities

The Executive Committee of the Association shall set guidelines and expectations that each affiliate group must meet to participate in any funding allocations that may be provided by the Association.

Article XII — Finance

The Association's Account shall be maintained with a bank approved by the Association and all monies collected for and on behalf of the Association shall be paid into it.

The Signatories of the account shall be two of the following officers; either the President and the Treasurer or the Secretary General and the Treasurer.

An impress account of not more than Le5,000.000. (Five Million Leones) or such other sum as may be fixed by the Association shall be kept by the Secretary General.

The Association may also be financed by loans, levies and voluntary donations.

The books and accounts of the Association shall be audited annually at the end of the financial year which is July and at such other time as the General Meeting may direct.

Article XIII — Association Fiscal Year

The fiscal year of the Association shall be from xxxx 1 through yyyy 30.

Article XIV — Amendments of By-Laws

These By-Laws may be amended from time to time by the members of the Association by a majority vote of the members present and voting at any regular or special meeting of the Association, provided the proposed amendment is circulated to all members at least 30 days prior to the meeting at which such vote is taken.

Article XV — Past Presidents Advisory Council

Section 1. Name and Purpose

There shall be a permanent organization within the Association known as the Past Presidents Advisory Council, which shall serve the Alumni Association in an advisory capacity and shall perform such other duties as may, from time to time, be assigned it by the President or Executive Committee of the Association.

Section 2. Membership and Meetings

Every Past President of the Alumni Association desiring to participate shall constitute the membership of the Council, which shall meet at least semi-annually to conduct its business.

Section 3. Officers and Rules and Regulations

The Council shall adopt its own rules and regulations for the conduct of its business, and the immediate Past President shall serve as Chair.

Article XVI — Constituent Alumni Groups

Section 1. Recognition

The Fourah Bay College Alumni Association, by action of the members at a meeting, may also recognize constituent alumni groups (groups of Association members organized around personal interests, experiences and/or characteristics) within the Fourah Bay College family.

Section 2. Rules and Regulations

Recognized constituent groups may adopt such rules and regulations for running their groups as they see fit, as long as they do not conflict with the provisions of the Constitution and Bylaws of the Fourah Bay College Alumni Association.

Section 3. Support

As financial and human resources allow, the Association will provide general organization, communication, and support for recognized constituent groups.`;

  const handleDownloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([constitutionText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "FBC_Alumni_Association_Constitution_2023.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans pb-20 print:bg-white print:pb-0">
      {/* Premium Institutional Hero Header */}
      <div className="relative h-[280px] flex items-center justify-center overflow-hidden print:hidden">
        <div className="absolute inset-0 bg-fbc-green z-0" />
        {/* Subtle dark overlay to make text more readable and feel formal */}
        <div className="absolute inset-0 bg-black/15 z-0" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[60px] -mr-20 -mt-20"></div>

        <div className="relative z-20 text-center w-full px-6 flex flex-col items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:opacity-85 transition-opacity mb-6 text-xs font-bold uppercase tracking-widest text-white/80 shrink-0"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </button>
          
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 border border-fbc-gold/40 shadow-sm p-1.5">
            <img 
              src="/fbc-alumni-logo.png" 
              alt="FBC Alumni Seal" 
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
            Constitution and By-Laws
          </h1>
          <p className="text-white/85 text-xs md:text-sm mt-2 font-medium tracking-wider uppercase">
            Fourah Bay College Alumni Association
          </p>
          <p className="text-white/60 text-[10px] md:text-xs mt-1">
            Official governing document · Revised 2023
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-30 mb-12 print:mt-0 print:px-0 print:mb-0 print:z-0">
        <div className="bg-white rounded-md shadow-sm p-8 md:p-16 border border-gray-200 print:shadow-none print:border-none print:p-0">
          
          {/* Document Toolbar */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8 text-sm text-gray-500 print:hidden">
            <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
              Official Document Viewer
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              >
                <Printer size={13} className="text-gray-500" />
                Print Document
              </button>
              <button
                onClick={() => setShowDownloadModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              >
                <FileDown size={13} className="text-gray-500" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-stone-50 border border-gray-200 rounded p-6 mb-10 text-sm print:hidden">
            <h4 className="font-serif text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Table of Contents
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-xs uppercase tracking-wider text-fbc-green mb-2.5">
                  I. Constitution
                </h5>
                <ul className="space-y-1.5 text-gray-600 font-normal">
                  <li><a href="#const-i" className="hover:text-fbc-green hover:underline">Article I — Name</a></li>
                  <li><a href="#const-ii" className="hover:text-fbc-green hover:underline">Article II — Objects</a></li>
                  <li><a href="#const-iii" className="hover:text-fbc-green hover:underline">Article III — Membership</a></li>
                  <li><a href="#const-iv" className="hover:text-fbc-green hover:underline">Article IV — Government</a></li>
                  <li><a href="#const-v" className="hover:text-fbc-green hover:underline">Article V — Meetings</a></li>
                  <li><a href="#const-vi" className="hover:text-fbc-green hover:underline">Article VI — Amendments</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-xs uppercase tracking-wider text-fbc-green mb-2.5">
                  II. By-Laws
                </h5>
                <ul className="space-y-1.5 text-gray-600 font-normal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-4">
                  <li><a href="#bylaws-i" className="hover:text-fbc-green hover:underline">Article I — Members</a></li>
                  <li><a href="#bylaws-ii" className="hover:text-fbc-green hover:underline">Article II — Dues</a></li>
                  <li><a href="#bylaws-iii" className="hover:text-fbc-green hover:underline">Article III — Officers</a></li>
                  <li><a href="#bylaws-iv" className="hover:text-fbc-green hover:underline">Article IV — Executive Committee</a></li>
                  <li><a href="#bylaws-v" className="hover:text-fbc-green hover:underline">Article V — Duties of Officers</a></li>
                  <li><a href="#bylaws-vi" className="hover:text-fbc-green hover:underline">Article VI — Auditors</a></li>
                  <li><a href="#bylaws-vii" className="hover:text-fbc-green hover:underline">Article VII — Meetings</a></li>
                  <li><a href="#bylaws-viii" className="hover:text-fbc-green hover:underline">Article VIII — Registration Fees & Dues</a></li>
                  <li><a href="#bylaws-ix" className="hover:text-fbc-green hover:underline">Article IX — Nominations</a></li>
                  <li><a href="#bylaws-x" className="hover:text-fbc-green hover:underline">Article X — Committees</a></li>
                  <li><a href="#bylaws-xi" className="hover:text-fbc-green hover:underline">Article XI — Affiliate Alumni Groups</a></li>
                  <li><a href="#bylaws-xii" className="hover:text-fbc-green hover:underline">Article XII — Finance</a></li>
                  <li><a href="#bylaws-xiii" className="hover:text-fbc-green hover:underline">Article XIII — Fiscal Year</a></li>
                  <li><a href="#bylaws-xiv" className="hover:text-fbc-green hover:underline">Article XIV — Amendments</a></li>
                  <li><a href="#bylaws-xv" className="hover:text-fbc-green hover:underline">Article XV — Past Presidents Council</a></li>
                  <li><a href="#bylaws-xvi" className="hover:text-fbc-green hover:underline">Article XVI — Constituent Groups</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rendered Document Body */}
          <div className="space-y-4">
            {renderFormattedContent(constitutionText)}
          </div>

          {/* Document Metadata Registry Note */}
          <div className="mt-16 bg-stone-50 rounded border border-gray-200 p-6 print:bg-white print:border-gray-300">
            <h4 className="font-serif text-sm font-bold text-gray-950 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
              Document Registry Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-500">
              <div>
                <span className="block font-semibold uppercase tracking-wider text-gray-400 mb-1">Document Type</span>
                <span className="text-gray-700 font-medium">Governing Document (Constitution & By-Laws)</span>
              </div>
              <div>
                <span className="block font-semibold uppercase tracking-wider text-gray-400 mb-1">Last Revised</span>
                <span className="text-gray-700 font-medium">2023</span>
              </div>
              <div>
                <span className="block font-semibold uppercase tracking-wider text-gray-400 mb-1">Issued By</span>
                <span className="text-gray-700 font-medium">Fourah Bay College Alumni Association</span>
              </div>
            </div>
            <p className="text-gray-500 text-[11px] mt-6 pt-4 border-t border-gray-200/60 leading-relaxed italic">
              Note: This is the official governing document of the Fourah Bay College Alumni Association. For clarifications or official inquiries regarding governance, amendments, or chapter operations, please contact the Executive Committee.
            </p>
          </div>

        </div>
      </div>

      {/* Download/Save Instructions Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 print:hidden">
          <div className="bg-white rounded border border-gray-300 shadow-xl max-w-md w-full p-6 relative">
            <h3 className="font-serif text-lg font-bold text-gray-950 mb-3 border-b border-gray-200 pb-2">
              Download Governing Document
            </h3>
            
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              To save this document as an official PDF:
            </p>
            
            <ol className="list-decimal list-inside text-xs text-gray-600 space-y-2 mb-6 bg-stone-50 p-4 border border-gray-200 rounded">
              <li>Click <strong>Open Print Preview</strong> below.</li>
              <li>In the printer destination dropdown, select <strong>Save as PDF</strong>.</li>
              <li>Click <strong>Save</strong> and choose a directory on your computer.</li>
            </ol>

            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center pt-2 border-t border-gray-100">
              <button
                onClick={handleDownloadTxt}
                className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-600 rounded text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer w-full sm:w-auto justify-center"
              >
                <FileText size={13} className="text-gray-500" />
                Plain Text (.txt)
              </button>
              
              <div className="flex gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setShowDownloadModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowDownloadModal(false);
                    window.print();
                  }}
                  className="px-4 py-2 bg-fbc-green hover:bg-fbc-green-dark text-white rounded text-xs font-semibold transition-colors cursor-pointer"
                >
                  Open Print Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConstitutionalBylaws;
