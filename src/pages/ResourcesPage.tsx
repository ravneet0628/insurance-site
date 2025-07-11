import React, { useState, useRef, useEffect } from 'react';
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
  PiggyBank,
  Building,
  User,
  Calendar,
  Award,
  Printer,
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
  const resultsRef = useRef<HTMLDivElement>(null);

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
    yearsToReplace: '1', // Default value of 1
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

  useEffect(() => {
    if (fnaResult && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [fnaResult]);

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
    const yearsToReplace = parseFloat(sectionB.yearsToReplace) || 1; // Default to 1
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
      yearsToReplace: '1', // Reset to default value
    });
    setSectionC({
      cashSavings: '',
      stocksBonds: '',
      rrspTfsa: '',
      insuredMortgage: '',
      existingLifeInsurance: '',
    });
    setFnaResult(null);
  };

  const handlePrintFNA = () => {
    if (!fnaResult) {
      alert('Please calculate your FNA first before printing.');
      return;
    }

    try {
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        alert('Please allow pop-ups to print your FNA report.');
        return;
      }

      const currentDate = new Date().toLocaleDateString('en-CA');
      
      const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Financial Needs Analysis Report</title>
          <style>
            @page { margin: 1in; }
            body { 
              margin: 0; 
              padding: 20px; 
              font-family: Arial, sans-serif; 
              line-height: 1.4;
              color: #333;
            }
            .letterhead { 
              border-bottom: 3px solid #1e2a78; 
              padding-bottom: 20px; 
              margin-bottom: 30px; 
            }
            .company-name { 
              font-size: 28px; 
              font-weight: bold; 
              color: #1e2a78; 
              margin-bottom: 10px; 
            }
            .contact-details { 
              font-size: 14px; 
              color: #666; 
            }
            .report-title { 
              font-size: 24px; 
              font-weight: bold; 
              margin: 30px 0 20px 0; 
              text-align: center; 
            }
            .section { 
              margin-bottom: 25px; 
            }
            .section-title { 
              font-size: 18px; 
              font-weight: bold; 
              margin-bottom: 15px; 
              background: #f8f9fa; 
              padding: 10px; 
              border-left: 4px solid #1e2a78;
            }
            .field-row { 
              display: flex; 
              justify-content: space-between; 
              margin-bottom: 8px; 
              padding: 4px 0;
            }
            .field-label { 
              font-weight: bold; 
              flex: 1;
            }
            .field-value {
              text-align: right;
              min-width: 120px;
            }
            .results-box { 
              border: 2px solid #1e2a78; 
              padding: 20px; 
              margin: 20px 0; 
              background: #f8f9fa; 
            }
            .total-need { 
              font-size: 20px; 
              font-weight: bold; 
              color: #1e2a78; 
              text-align: center; 
              margin-top: 15px; 
              padding: 10px;
              background: white;
              border-radius: 5px;
            }
            .footer { 
              margin-top: 40px; 
              padding-top: 20px; 
              border-top: 1px solid #ccc; 
              font-size: 12px; 
              color: #666; 
            }
            .summary-row {
              font-weight: bold;
              border-top: 2px solid #1e2a78;
              margin-top: 10px;
              padding-top: 8px;
            }
            @media print {
              body { print-color-adjust: exact; }
            }
          </style>
        </head>
        <body>
          <div class="letterhead">
            <div class="company-name">SecureChoice Insurance</div>
            <div class="contact-details">
              123 Insurance Street, Toronto, ON M5V 3A8<br>
              Phone: (123) 456-7890 | Email: info@securechoice.com<br>
              Licensed Insurance Broker - Serving Canada
            </div>
          </div>

          <div class="report-title">Financial Needs Analysis Report</div>
          <div style="text-align: center; margin-bottom: 30px; color: #666;">Generated on ${currentDate}</div>

          <div class="section">
            <div class="section-title">Client Information</div>
            <div class="field-row">
              <span class="field-label">Name:</span> 
              <span class="field-value">${clientDetails.name || 'N/A'}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Phone:</span> 
              <span class="field-value">${clientDetails.phone || 'N/A'}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Email:</span> 
              <span class="field-value">${clientDetails.email || 'N/A'}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Advisor Information</div>
            <div class="field-row">
              <span class="field-label">Name:</span> 
              <span class="field-value">${advisorDetails.name}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Phone:</span> 
              <span class="field-value">${advisorDetails.phone}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Email:</span> 
              <span class="field-value">${advisorDetails.email}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">A - Current Debts and Financial Needs</div>
            <div class="field-row">
              <span class="field-label">Total Mortgage Amount:</span> 
              <span class="field-value">$${parseFloat(sectionA.mortgageAmount || '0').toLocaleString()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Loans (Auto, Credit Cards, Personal & others):</span> 
              <span class="field-value">$${parseFloat(sectionA.loans || '0').toLocaleString()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Children Education Funds:</span> 
              <span class="field-value">$${parseFloat(sectionA.educationFunds || '0').toLocaleString()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Emergency Funds (3-6 months):</span> 
              <span class="field-value">$${parseFloat(sectionA.emergencyFunds || '0').toLocaleString()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Final expenses:</span> 
              <span class="field-value">$${parseFloat(sectionA.finalExpenses || '0').toLocaleString()}</span>
            </div>
            <div class="field-row summary-row">
              <span class="field-label">Total Section A:</span> 
              <span class="field-value">$${fnaResult.totalA.toLocaleString()}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">B - Future Financial Needs</div>
            <div class="field-row">
              <span class="field-label">Annual Income to take home:</span> 
              <span class="field-value">$${parseFloat(sectionB.annualIncome || '0').toLocaleString()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Number of years to replace income:</span> 
              <span class="field-value">${sectionB.yearsToReplace} years</span>
            </div>
            <div class="field-row summary-row">
              <span class="field-label">Total Section B:</span> 
              <span class="field-value">$${fnaResult.totalB.toLocaleString()}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">C - Assets and Financial Resources</div>
            <div class="field-row">
              <span class="field-label">Cash and Savings:</span> 
              <span class="field-value">$${parseFloat(sectionC.cashSavings || '0').toLocaleString()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Stocks and Bonds:</span> 
              <span class="field-value">$${parseFloat(sectionC.stocksBonds || '0').toLocaleString()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">RRSP, TFSA:</span> 
              <span class="field-value">$${parseFloat(sectionC.rrspTfsa || '0').toLocaleString()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Insured Mortgage:</span> 
              <span class="field-value">$${parseFloat(sectionC.insuredMortgage || '0').toLocaleString()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Existing Life Insurance:</span> 
              <span class="field-value">$${parseFloat(sectionC.existingLifeInsurance || '0').toLocaleString()}</span>
            </div>
            <div class="field-row summary-row">
              <span class="field-label">Total Section C:</span> 
              <span class="field-value">$${fnaResult.totalC.toLocaleString()}</span>
            </div>
          </div>

          <div class="results-box">
            <div style="text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 20px;">
              FINANCIAL NEEDS ANALYSIS RESULTS
            </div>
            <div class="field-row">
              <span class="field-label">Total Current & Future Needs (A + B):</span> 
              <span class="field-value">$${(fnaResult.totalA + fnaResult.totalB).toLocaleString()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Less: Available Assets (C):</span> 
              <span class="field-value">-$${fnaResult.totalC.toLocaleString()}</span>
            </div>
            <div class="total-need">
              Life Insurance Need: $${fnaResult.lifeInsuranceNeed.toLocaleString()}
            </div>
          </div>

          <div class="footer">
            <strong>Note:</strong> This Financial Needs Analysis provides a comprehensive assessment based on the information provided. 
            For personalized recommendations and to explore insurance options, please contact our experts.<br><br>
            <em>This report was generated by SecureChoice Insurance's online FNA calculator. Results are estimates and should be reviewed with a licensed insurance professional.</em>
          </div>
        </body>
        </html>
      `;

      printWindow.document.write(printContent);
      printWindow.document.close();
      
      // Add a small delay to ensure content is loaded before printing
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
      }, 500);
      
    } catch (error) {
      console.error('Print failed:', error);
      alert('Printing failed. Please try again or save the page as PDF.');
    }
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
        primaryCTA={{ text: 'FNA Calculator', scrollTo: 'fna-calculator' }}
        secondaryCTA={{ text: 'View Resources', scrollTo: 'useful-links' }}
        height="lg"
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

          <div className="max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Calculator className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-ubuntu font-bold text-gray-900">
                  Financial Needs Assessment Calculator
                </h3>
              </div>

              {/* Calculator Form */}
              <div className="space-y-8">
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
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
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
                        min="1"
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

                {/* Calculate Buttons - Improved styling without hover shape changes */}
                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={handleFnaCalculation}
                    className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-opacity duration-200 hover:opacity-90"
                  >
                    Calculate FNA
                  </button>
                  <button
                    onClick={resetCalculator}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-opacity duration-200 hover:opacity-90"
                  >
                    Reset
                  </button>
                </div>

                {/* Results Section - Now positioned after buttons for better UX */}
                {fnaResult && (
                  <div ref={resultsRef} id="fna-results" className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
                    <h4 className="text-lg font-ubuntu font-bold text-gray-900 mb-4">
                      Your Financial Needs Analysis
                    </h4>

                    <div
                      className="space-y-4"
                    >
                      {/* Section Totals */}
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="text-sm font-medium text-blue-700 mb-1">Total (+A)</div>
                          <div className="text-xl font-bold text-blue-900">
                            ${fnaResult.totalA.toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="text-sm font-medium text-green-700 mb-1">Total (+B)</div>
                          <div className="text-xl font-bold text-green-900">
                            ${fnaResult.totalB.toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <div className="text-sm font-medium text-red-700 mb-1">Total (-C)</div>
                          <div className="text-xl font-bold text-red-900">
                            -${fnaResult.totalC.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {/* Final Result */}
                      <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center mb-2">
                              <Calculator className="w-6 h-6 text-primary mr-2" />
                              <span className="text-lg font-semibold text-primary">Life Insurance Need</span>
                            </div>
                            <div className="text-3xl font-bold text-primary">
                              ${fnaResult.lifeInsuranceNeed.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">Result: A+B-C</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons - Same size and simplified */}
                      <div className="flex space-x-4 pt-4">
                        <button
                          onClick={() => window.open('/contact', '_blank')}
                          className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-opacity duration-200 hover:opacity-90"
                        >
                          Contact Expert
                        </button>
                        <button
                          onClick={handlePrintFNA}
                          className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-opacity duration-200 hover:opacity-90 flex items-center justify-center"
                        >
                          <Printer className="w-4 h-4 mr-2" />
                          Print Report
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* Useful Links Section */}
      <section id="useful-links" className="py-16 lg:py-24 bg-gray-50">
        <PageContainer>
          <SectionHeader
            title="Useful Links & Resources"
            subtitle="Access helpful resources from government agencies, industry organizations, and financial planning tools to make informed decisions."
            textAlign="center"
            className="mb-16"
          />

          <ContentGrid columns={{ sm: 1, md: 2, lg: 4 }} gap="lg" stagger={false}>
            {usefulLinks.map((category) => (
              <div key={category.category} className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-ubuntu font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.links.map((link) => (
                    <Card
                      key={link.title}
                      className="p-4 h-48 min-h-48 flex flex-col hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <link.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                            {link.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3">
                        {link.description}
                      </p>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
                      >
                        Visit Site
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </ContentGrid>
        </PageContainer>
      </section>

      {/* Ready to Get Protected Section */}
      <CTASection
        title="Ready to Get Protected?"
        subtitle="Use our resources to get informed, then let our experts help you find the perfect insurance solution for your needs."
        primaryCTA={{
          text: 'Contact Our Experts',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'Our Solutions',
          href: '/',
        }}
        backgroundImage="/images/family-protection.jpg"
      />
    </div>
  );
};

export default ResourcesPage;
