import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Verified Authenticity`,
      description: `Every product is thoroughly vetted and verified to ensure you're getting genuine, high-quality beauty items.`,
      icon: <i className="las la-check-circle"></i>,
    },
    {
      heading: `Smart Recommendations`,
      description: `Get personalized product suggestions based on your skin type, concerns and beauty goals.`,
      icon: <i className="las la-magic"></i>,
    },
    {
      heading: `Detailed Ingredients`,
      description: `Full transparency with comprehensive ingredient lists and explanations of their benefits.`,
      icon: <i className="las la-list"></i>,
    },
    {
      heading: `Trusted Reviews`,
      description: `Real reviews from verified purchasers to help you make informed decisions.`,
      icon: <i className="las la-star"></i>,
    },
    {
      heading: `Brand Dashboard`,
      description: `Powerful analytics and inventory management tools to grow your beauty brand.`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Secure Platform`,
      description: `Enterprise-grade security to protect both customers and sellers.`,
      icon: <i className="las la-shield-alt"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Chen`,
      designation: `Beauty Brand Owner`,
      content: `Since joining this platform, our sales have increased by 300%. The tools and exposure they provide are incredible.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Rodriguez`,
      designation: `Skincare Enthusiast`,
      content: `Finally, a place where I can trust the products I'm buying. The ingredient transparency is a game-changer.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emma Thompson`,
      designation: `Professional Makeup Artist`,
      content: `The variety and quality of products available here is outstanding. It's my go-to platform for all beauty needs.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for emerging beauty brands`,
      monthly: 29,
      yearly: 290,
      features: [`Basic analytics`, `Standard support`, `Up to 50 products`],
    },
    {
      title: `Professional`,
      description: `For growing beauty businesses`,
      monthly: 99,
      yearly: 990,
      features: [
        `Advanced analytics`,
        `Priority support`,
        `Unlimited products`,
        `Marketing tools`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for large brands`,
      monthly: 299,
      yearly: 2990,
      features: [
        `Custom integration`,
        `Dedicated support`,
        `White-label options`,
        `API access`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How do you verify product authenticity?`,
      answer: `We work directly with brands and authorized distributors, implementing a rigorous verification process for all products listed on our platform.`,
    },
    {
      question: `What are your commission rates?`,
      answer: `Our commission rates range from 10-15% depending on your package, significantly lower than traditional retail markups.`,
    },
    {
      question: `How long does it take to get started?`,
      answer: `Most brands can be up and running within 48 hours after verification. Our team provides full onboarding support.`,
    },
    {
      question: `Do you handle shipping and fulfillment?`,
      answer: `Yes, we offer integrated shipping solutions and can handle all fulfillment needs through our network of distribution centers.`,
    },
  ]

  const steps = [
    {
      heading: `Create Your Account`,
      description: `Sign up and complete our verification process to ensure platform quality.`,
    },
    {
      heading: `List Your Products`,
      description: `Upload your product catalog with our easy-to-use dashboard.`,
    },
    {
      heading: `Manage Orders`,
      description: `Process orders, track inventory, and analyze performance in real-time.`,
    },
    {
      heading: `Grow Your Brand`,
      description: `Leverage our marketing tools and analytics to expand your reach.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😫`,
      title: `Struggling to verify product authenticity`,
    },
    {
      emoji: `😤`,
      title: `Wasting time searching multiple websites`,
    },
    {
      emoji: `😔`,
      title: `Lost money on fake products`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Your One-Stop Beauty & Wellness Marketplace`}
        subtitle={`Join thousands of beauty brands and conscious consumers in the fastest-growing beauty marketplace. Get verified products, detailed information, and seamless shopping all in one place.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/83FJbY-rajswebsite-8xuC`}
        socialProof={
          <LandingSocialRating
            avatarItems={[
              { src: 'https://randomuser.me/api/portraits/men/51.jpg' },
              { src: 'https://randomuser.me/api/portraits/women/9.jpg' },
              { src: 'https://randomuser.me/api/portraits/women/52.jpg' },
              { src: 'https://randomuser.me/api/portraits/men/5.jpg' },
              { src: 'https://randomuser.me/api/portraits/men/4.jpg' },
            ]}
            numberOfUsers={1000}
            suffixText={`trusted brands and customers`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Featured on`} />
      <LandingPainPoints
        title={`70% of beauty consumers struggle to find trustworthy products online - We're changing that`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Launch Your Beauty Brand in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Everything You Need to Succeed in Beauty E-Commerce`}
        subtitle={`Powerful tools and features designed to help beauty brands thrive online`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Successful Brands Who Trust Us`}
        subtitle={`See how we've helped beauty brands increase their sales by an average of 200%`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Pricing Plans That Grow With Your Brand`}
        subtitle={`Choose the perfect plan for your beauty business`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions`}
        subtitle={`Everything you need to know about our beauty marketplace`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Beauty Business?`}
        subtitle={`Join over 1,000 successful brands already selling on our platform`}
        buttonText={`Start Selling Today`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
