import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  ExternalLink,
  BookOpen,
  FileText,
  TrendingUp,
  Users,
  Shield,
  Heart,
  Globe,
  DollarSign,
  PiggyBank,
  Building,
  User,
  Calendar,
  Star,
  Award,
  CheckCircle,
} from 'lucide-react';
import Hero from '../components/Hero';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import ContentGrid from '../components/ContentGrid';
import Card from '../components/Card';

/**
 * ResourcesPage component - Financial tools and helpful resources
 */
const ResourcesPage: React.FC = () => {
  // Client Details
  const [clientDetails, setClientDetails] = useState({
    name: '',
    phone: '',
    email: '',
  });

  // Advisor Details
  const [advisorDetails, setAdvisorDetails] = useState({
    name: 'SecureChoice Insurance Advisor',
    phone: '(123) 456-7890',
    email: 'advisor@securechoice.com',
  });

  // Section A: Current debts and financial needs
  const [sectionA, setSectionA] = useState({
    mortgageAmount: '',
    loans: '',
    educationFunds: '',
    emergencyFunds: '',
    finalExpenses: '',
  });

  // Section B: Future financial needs
  const [sectionB, setSectionB] = useState({
    annualIncome: '',
    yearsToReplace: '',
  });

  // Section C: Assets and financial resources
  const [sectionC, setSectionC] = useState({
    cashSavings: '',
    stocksBonds: '',
    rrspTfsa: '',
    insuredMortgage: '',
    existingLifeInsurance: '',
  });

  const [fnaResult, setFnaResult] = useState<{
    totalA: number;
    totalB: number;
    totalC: number;
    lifeInsuranceNeed: number;
  } | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleFnaCalculation = () => {
    // Calculate Section A Total
    const totalA = [
      parseFloat(sectionA.mortgageAmount) || 0,
      parseFloat(sectionA.loans) || 0,
      parseFloat(sectionA.educationFunds) || 0,
      parseFloat(sectionA.emergencyFunds) || 0,
      parseFloat(sectionA.finalExpenses) || 0,
    ].reduce((sum, value) => sum + value, 0);

    // Calculate Section B Total
    const annualIncome = parseFloat(sectionB.annualIncome) || 0;
    const yearsToReplace = parseFloat(sectionB.yearsToReplace) || 0;
    const totalB = annualIncome * yearsToReplace;

    // Calculate Section C Total
    const totalC = [
      parseFloat(sectionC.cashSavings) || 0,
      parseFloat(sectionC.stocksBonds) || 0,
      parseFloat(sectionC.rrspTfsa) || 0,
      parseFloat(sectionC.insuredMortgage) || 0,
      parseFloat(sectionC.existingLifeInsurance) || 0,
    ].reduce((sum, value) => sum + value, 0);

    // Calculate Life Insurance Need: A + B - C
    const lifeInsuranceNeed = Math.max(0, totalA + totalB - totalC);

    setFnaResult({
      totalA,
      totalB,
      totalC,
      lifeInsuranceNeed,
    });
    setShowResult(true);
  };

  const resetCalculator = () => {
    setClientDetails({
      name: '',
      phone: '',
      email: '',
    });
    setSectionA({
      mortgageAmount: '',
      loans: '',
      educationFunds: '',
      emergencyFunds: '',
      finalExpenses: '',
    });
    setSectionB({
      annualIncome: '',
      yearsToReplace: '',
    });
    setSectionC({
      cashSavings: '',
      stocksBonds: '',
      rrspTfsa: '',
      insuredMortgage: '',
      existingLifeInsurance: '',
    });
    setFnaResult(null);
    setShowResult(false);
  };

  // Useful links categorized by topic
  const usefulLinks = [
    {
      category: 'Government Resources',
      icon: Building,
      links: [
        {
          title: 'Canada Revenue Agency',
          description: 'Tax information and benefits',
          url: 'https://www.canada.ca/en/revenue-agency.html',
          icon: FileText,
        },
        {
          title: 'Government of Canada Benefits',
          description: 'Find government benefits and services',
          url: 'https://www.canada.ca/en/government/benefits.html',
          icon: Award,
        },
        {
          title: 'Financial Consumer Agency of Canada',
          description: 'Financial education and tools',
          url: 'https://www.canada.ca/en/financial-consumer-agency.html',
          icon: BookOpen,
        },
      ],
    },
    {
      category: 'Insurance Resources',
      icon: Shield,
      links: [
        {
          title: 'Insurance Bureau of Canada',
          description: 'Industry information and consumer guides',
          url: 'https://www.ibc.ca/',
          icon: Shield,
        },
        {
          title: 'Life Insurance Association',
          description: 'Life insurance information and statistics',
          url: 'https://www.clhia.ca/',
          icon: Heart,
        },
        {
          title: 'Ombudsman for Life & Health Insurance',
          description: 'Consumer protection and complaints',
          url: 'https://www.olhi.ca/',
          icon: Users,
        },
      ],
    },
    {
      category: 'Financial Planning',
      icon: TrendingUp,
      links: [
        {
          title: 'Financial Planning Standards Council',
          description: 'Find certified financial planners',
          url: 'https://www.fpsc.ca/',
          icon: User,
        },
        {
          title: 'Investor Education Fund',
          description: 'Investment education and resources',
          url: 'https://www.getsmarteraboutmoney.ca/',
          icon: PiggyBank,
        },
        {
          title: 'Canada Pension Plan',
          description: 'Retirement planning information',
          url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp.html',
          icon: Calendar,
        },
      ],
    },
    {
      category: 'Health & Safety',
      icon: Heart,
      links: [
        {
          title: 'Health Canada',
          description: 'Health information and regulations',
          url: 'https://www.canada.ca/en/health-canada.html',
          icon: Heart,
        },
        {
          title: 'Canadian Mental Health Association',
          description: 'Mental health resources and support',
          url: 'https://cmha.ca/',
          icon: Users,
        },
        {
          title: 'Travel Health Insurance',
          description: 'Travel health advice and requirements',
          url: 'https://travel.gc.ca/travelling/health-safety/insurance',
          icon: Globe,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <title>Resources - SecureChoice Insurance | Financial Tools & Links</title>
      <meta
        name="description"
        content="Access our FNA calculator, helpful links, and financial resources. Tools and information to help you make informed insurance and financial decisions."
      />
      <meta property="og:title" content="Resources - SecureChoice Insurance" />
      <meta
        property="og:description"
        content="Financial tools and helpful resources for insurance and financial planning."
      />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="/resources" />

      {/* Hero Section */}
      <Hero
        title="Resources & Tools"
        subtitle="Access our financial needs analysis calculator, helpful links, and expert resources to make informed decisions about your insurance and financial planning."
        bgImg="/images/business-growth.jpg"
        ctaText="Start Planning"
        ctaLink="#fna-calculator"
        height="md"
        overlay="medium"
      />

      {/* FNA Calculator Section */}
      <section id="fna-calculator" className="py-16 lg:py-24 bg-white">
        <PageContainer>
          <SectionHeader
            title="Financial Needs Analysis Calculator"
            subtitle="Calculate your insurance needs with our comprehensive FNA tool. Get personalized recommendations based on your financial situation."
            textAlign="center"
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Calculator Form */}
                  <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center mb-6">
                      <Calculator className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-2xl font-ubuntu font-bold text-gray-900">
                        Financial Needs Assessment Calculator
                      </h3>
                    </div>

                    {/* Client Details */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-ubuntu font-bold text-gray-900 mb-4">
                        Client Details
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            value={clientDetails.name}
                            onChange={(e) =>
                              setClientDetails({ ...clientDetails, name: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Client Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone#
                          </label>
                          <input
                            type="tel"
                            value={clientDetails.phone}
                            onChange={(e) =>
                              setClientDetails({ ...clientDetails, phone: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Client Phone"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            value={clientDetails.email}
                            onChange={(e) =>
                              setClientDetails({ ...clientDetails, email: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Client Email"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Advisor Details */}
                    <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                      <h4 className="text-lg font-ubuntu font-bold text-gray-900 mb-4">
                        Advisor Details
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            value={advisorDetails.name}
                            onChange={(e) =>
                              setAdvisorDetails({ ...advisorDetails, name: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Advisor Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone#
                          </label>
                          <input
                            type="tel"
                            value={advisorDetails.phone}
                            onChange={(e) =>
                              setAdvisorDetails({ ...advisorDetails, phone: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Advisor Phone"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            value={advisorDetails.email}
                            onChange={(e) =>
                              setAdvisorDetails({ ...advisorDetails, email: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Advisor Email"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section A: Current debts and financial needs */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-ubuntu font-bold text-gray-900 mb-4">
                        A - Identify your current debts and financial needs
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            1. Total Mortgage Amount ($)
                          </label>
                          <input
                            type="number"
                            value={sectionA.mortgageAmount}
                            onChange={(e) =>
                              setSectionA({ ...sectionA, mortgageAmount: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            2. Loans (Auto, Credit Cards, Personal & others) ($)
                          </label>
                          <input
                            type="number"
                            value={sectionA.loans}
                            onChange={(e) => setSectionA({ ...sectionA, loans: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            3. Children Education Funds ($)
                          </label>
                          <input
                            type="number"
                            value={sectionA.educationFunds}
                            onChange={(e) =>
                              setSectionA({ ...sectionA, educationFunds: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            4. Emergency Funds (3-6 months) ($)
                          </label>
                          <input
                            type="number"
                            value={sectionA.emergencyFunds}
                            onChange={(e) =>
                              setSectionA({ ...sectionA, emergencyFunds: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            5. Final expenses (Probate, Executor fees, & Other Fees) ($)
                          </label>
                          <input
                            type="number"
                            value={sectionA.finalExpenses}
                            onChange={(e) =>
                              setSectionA({ ...sectionA, finalExpenses: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section B: Future financial needs */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-ubuntu font-bold text-gray-900 mb-4">
                        B - Determine your future financial needs
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            1. Annual Income to take home ($)
                          </label>
                          <input
                            type="number"
                            value={sectionB.annualIncome}
                            onChange={(e) =>
                              setSectionB({ ...sectionB, annualIncome: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            2. Number of years the income needs to be replaced
                          </label>
                          <input
                            type="number"
                            value={sectionB.yearsToReplace}
                            onChange={(e) =>
                              setSectionB({ ...sectionB, yearsToReplace: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section C: Assets and financial resources */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-ubuntu font-bold text-gray-900 mb-4">
                        C - Deduct your assets and financial resources
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            1. Cash and Savings ($)
                          </label>
                          <input
                            type="number"
                            value={sectionC.cashSavings}
                            onChange={(e) =>
                              setSectionC({ ...sectionC, cashSavings: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            2. Stocks and Bonds ($)
                          </label>
                          <input
                            type="number"
                            value={sectionC.stocksBonds}
                            onChange={(e) =>
                              setSectionC({ ...sectionC, stocksBonds: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            3. RRSP, TFSA ($)
                          </label>
                          <input
                            type="number"
                            value={sectionC.rrspTfsa}
                            onChange={(e) => setSectionC({ ...sectionC, rrspTfsa: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            4. Insured Mortgage ($)
                          </label>
                          <input
                            type="number"
                            value={sectionC.insuredMortgage}
                            onChange={(e) =>
                              setSectionC({ ...sectionC, insuredMortgage: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            5. Existing Life Insurance ($)
                          </label>
                          <input
                            type="number"
                            value={sectionC.existingLifeInsurance}
                            onChange={(e) =>
                              setSectionC({ ...sectionC, existingLifeInsurance: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        onClick={handleFnaCalculation}
                        className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                      >
                        Calculate FNA
                      </button>
                      <button
                        onClick={resetCalculator}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Reset
                      </button>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-ubuntu font-bold text-gray-900 mb-4">
                      Your Financial Needs Analysis
                    </h4>

                    {showResult ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        {/* Section Totals */}
                        <div className="space-y-3">
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-600">Total (+A)</span>
                              <span className="text-lg font-bold text-red-600">
                                ${fnaResult?.totalA.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-600">Total (+B)</span>
                              <span className="text-lg font-bold text-yellow-600">
                                ${fnaResult?.totalB.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-600">Total (-C)</span>
                              <span className="text-lg font-bold text-purple-600">
                                -${fnaResult?.totalC.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Final Result */}
                        <div className="bg-primary p-6 rounded-lg text-white">
                          <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                              <DollarSign className="w-6 h-6 mr-2" />
                              <span className="text-sm font-medium">Life Insurance Need</span>
                            </div>
                            <div className="text-3xl font-bold">
                              ${fnaResult?.lifeInsuranceNeed.toLocaleString()}
                            </div>
                            <div className="text-sm mt-2 opacity-90">Result: A+B-C</div>
                          </div>
                        </div>

                        <div className="text-sm text-gray-600 space-y-2">
                          <p>
                            <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
                            Comprehensive analysis of current debts and future needs
                          </p>
                          <p>
                            <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
                            Accounts for existing assets and life insurance
                          </p>
                          <p>
                            <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
                            Professional calculation based on industry standards
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Note:</strong> This Financial Needs Analysis provides a
                            comprehensive assessment. For personalized recommendations and to
                            explore insurance options, please contact our experts.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <button
                            onClick={() => (window.location.href = '/contact')}
                            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                          >
                            Get Professional Consultation
                          </button>
                          <button
                            onClick={() => window.print()}
                            className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                          >
                            Print FNA Report
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="text-center py-8">
                        <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">
                          Complete the Financial Needs Assessment form and click "Calculate FNA" to
                          see your comprehensive insurance analysis.
                        </p>
                        <div className="mt-4 text-xs text-gray-400">
                          Fill in Client Details, Advisor Details, and all three sections (A, B, C)
                          for accurate results.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* Useful Links Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <PageContainer>
          <SectionHeader
            title="Useful Links & Resources"
            subtitle="Access helpful resources from government agencies, industry organizations, and financial planning tools to make informed decisions."
            textAlign="center"
            className="mb-16"
          />

          <div className="space-y-12">
            {usefulLinks.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <category.icon className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-2xl font-ubuntu font-bold text-gray-900">
                      {category.category}
                    </h3>
                  </div>

                  <ContentGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
                    {category.links.map((link, linkIndex) => (
                      <motion.div
                        key={link.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: linkIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="h-48 min-h-48 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <link.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1 flex flex-col">
                              <h4 className="text-lg font-ubuntu font-semibold text-gray-900 mb-2">
                                {link.title}
                              </h4>
                              <p className="text-sm text-gray-600 mb-4 flex-1">
                                {link.description}
                              </p>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-semibold mt-auto"
                              >
                                Visit Site
                                <ExternalLink className="w-4 h-4 ml-1" />
                              </a>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </ContentGrid>
                </div>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Ready to Get Protected Section */}
      <CTASection
        title="Ready to Get Protected?"
        subtitle="Use our resources to get informed, then let our experts help you find the perfect insurance solution for your needs."
        primaryCTA={{
          text: 'Contact Our Experts',
          to: '/contact',
        }}
        secondaryCTA={{
          text: 'Our Solutions',
          to: '/',
          icon: Star,
        }}
        backgroundImage="/images/family-protection.jpg"
      />
    </div>
  );
};

export default ResourcesPage;
