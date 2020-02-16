<template>
  <Person  >


  <div slot="contact">
    <address class="mt-3">
      <h5>350 Main Street</h5>
      <h5>Suite 2420</h5>
      <h5>Buffalo, New York 14202</h5>
      <h5>
        <a href="mailto:ltupchiklaw@gmail.com">vgabrieletlg@gmail.com</a>
      </h5>
      <h5>Fax: 716-358-1015</h5>
      <h5>Phone: 716-856-5556</h5>
    </address>
  </div>

  <p>
    Ms. Gabriele has devoted her legal practice to matrimonial and family law and has
    established a reputation as a knowledgeable resource and effective advocate for her 
    clients in all matters of divorce, child custody and family court proceedings.
    Ms. Gabriele is a member of the Executive Committee of the Family Law Section of the New York State Bar Association.
    In addition, she lectures extensively in the area of Matrimonial 
    and Family Law and has chaired CLE seminars in Erie County and 
    New York State Bar Associations as well as lectured at such seminars. 
    Further, Ms. Gabriele has guest lectured on the practice of 
    Matrimonial and Family Law at the University at Buffalo Law School and the State University at Buffalo. 
    Ms. Gabriele is one of the co-chairs of the Bar Association of Erie County’s Matrimonial and Family Law Committee. 
    She is also a member of the Bar Association of Erie County’s Family Court Practice and Procedure Committee. 
  </p>

<!-- <h4>
  Education and Court Admissions
</h4>

<ul>
  <li>
  U.S. District Court of the Western District of New York
  </li>
  <li>
  New York State, Fourth Department
  </li>
  <li>
  J.D., State University of New York at Buffalo School of Law
  </li>
  <li>
  State University of New York at Buffalo, B.S. in Business Administration
  </li>
</ul>

<h4>
  Professional and Civic Activities
</h4>

<ul>
  <li>
  Monroe County Bar Association, 2014-2017
  </li>
  <li>
  Erie County Bar Association
  </li>
  <li>
  Co-Chair, Matrimonial and Family Law Committee
  </li>
  <li>
  Member, Family Court Practice and Procedure Committee
  </li>
  <li>
  Member, Young Lawyers Committee
  </li>
  <li>
  New York State Bar Association
  </li>
  <li>
  Family Law Section Member, Membership Committee Member
  </li>
  <li>
  Young Lawyers Section Member
  </li>
  <li>
  Member, Buffalo Executives Association
  </li>
  <li>
  Executive Board Member, Amherst Chamber of Commerce -Emerging Business Leaders Section
  </li>
</ul>

<h4>
  Speaking Engagements
</h4>

<ul>
  <li>
  Family Court Practical Skills, New York State Bar Association, Program Chair, 2018
  </li>
  <li>
  Basics of Matrimonial Law, New York State Bar Association, Program Chair & Speaker, 2017
  </li>
  <li>
  Critical Areas in Matrimonial Law II: Drafting Pendente Lite, Modifications and In Limine Motions, New York State Bar Association, Speaker, 2018
  </li>
  <li>
  Monthly Case Law Updates, Erie County Bar Association- Matrimonial and Family Law Committee
  </li>
  <li>
  Matrimonial Law Practice, Guest Lecturer, State University at Buffalo Law School, 2017
  </li>
  <li>
  Family and Matrimonial Law Practice, Guest Lecturer, State University at Buffalo, 2016-2018
  </li>
</ul>

  <h4>
    Practice Areas
  </h4>

<ul>
  <li>
  Family and Matrimonial Law Litigation
  </li>
  <li>
  Business and Corporate Litigation
  </li>
  <li>
  Child Custody
  </li>
</ul> -->


  </person>
</template>

<script>
import Person from './../../layouts/Person.vue'

export default {
  components: {
    Person
  }
}
</script>

<style lang="scss">
  address h5 {
    font-size: 15px !important;
  }
</style>