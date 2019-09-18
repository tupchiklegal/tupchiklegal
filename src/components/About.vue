<template>
<div>
  <div class="container p-1">
    <router-link to="/" >	Home </router-link> &gt; About
  </div>
  <div class="container-fuid bg-dark">
    <div class="container p-3">
      <h1 class="text-light">About</h1>
    </div>
  </div>
  <div id="about" class="container mt-4">

    <h4 class="text-primary">Family and Matrimonial Law</h4>
    <p>
      When it comes to family, legal matters can be challenging, sensitive and highly volatile. 
      At Bouvier Law, you’ll find our family and matrimonial law attorneys combine compassion with 
      practical advice to deliver caring, yet effective resolutions for our clients. 
      <strong> We offer clients personalized attention and one-on-one service. 
      You will never get lost in the shuffle. </strong>
      Our attorneys are compassionate advocates who accord every case a high level of importance. 
      Our goal is to successfully resolve family legal matters while minimizing cost and emotional upheaval for our clients. 
      With over 40 combined years of experience in handling family law matters right here in Buffalo, 
      our practice is well-seasoned in issues involving:
    </p>
    <div class="row">
      <div class="col-sm-6">
        <ul>
          <li>
            <router-link to="/practice/divorce-seperation">
              Divorce & Seperation
            </router-link>
          </li>
          <li>
            <router-link to="/practice/high-asset">
              High-Asset / High Net Worth Divorce Representation
            </router-link>
          </li>
          <li>
            <router-link to="/practice/child-custody">
              Child Custody & Visitation
            </router-link>
          </li>  
        </ul>
      </div>
      <div class="col-sm-6">
        <ul>  
          <li>
            <router-link to="/practice/pre-marriage">
              Pre-Marriage Planning
            </router-link>
          </li>
          <li>
            <router-link to="/practice/modifications">
              Modifications of Divorce Judgment
            </router-link>
          </li>    
        </ul>
      </div>
    </div>

    <h4 class="text-primary">Our Team</h4>

    <div class="container">
      <person name='Vanessa C. Gabriele' picture='empty_profile.jpeg'>
        An associate in general practice at Bouvier Law LLP. 
        Ms. Gabriele graduated cum laude from the University of Buffalo and the 
        University of Buffalo Law School where she served as the case 
        note editor for the Buffalo Journal of Gender Law and Social Policy. 
        Ms. Gabriele has devoted her legal practice to matrimonial and family law a
        nd has established a reputation as a knowledgeable resource and effective advocate 
        for her clients in all matters of divorce, child custody and family court proceedings. 
        Ms. Gabriele is a member of the Executive Committee of the Family Law Section 
        of the New York State Bar Association. 
        In addition, she lectures extensively in the area of Matrimonial and Family Law 
        and has chaired CLE seminars in Erie County and New York State Bar Associations
        as well as lectured at such seminars. Further, 
        Ms. Gabriele has guest lectured on the practice of Matrimonial and 
        Family Law at the University at Buffalo Law School and the State University at Buffalo. 
        Ms. Gabriele is one of the co-chairs of the Erie County Bar Association’s 
        Matrimonial and Family Law Committee. 
        She is also a member of the Erie County Family Court Practice and Procedure Committee. 
        rior to her employment here at Bouvier Law, Ms. Gabriele worked at the 
        boutique matrimonial and family law firm of J. Adams and Associates, PLLC, 
        a firm dedicated exclusively to matrimonial and family law litigation. 
        She worked exclusively with and was trained by Joan Casilio Adams, Esq., 
        a fellow of the American Academy of Matrimonial Lawyers and well respected by the Western New York Matrimonial Bar.
      </person>
      <!-- <person name='Shane Griffin' picture='empty_profile.jpeg'></person>
      <person name='Shane Griffin' picture='empty_profile.jpeg'></person>
      <person name='Shane Griffin' picture='empty_profile.jpeg'></person> -->
    </div>

  </div>
</div>
</template>

<script>
import person from './person.vue'

export default {
  components: {
    person
  }
}
</script>