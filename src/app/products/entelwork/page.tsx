import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CalendarCheck,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Layers,
  Cpu,
  Clock,
  Building2,
  Lock,
  FileCheck,
  AlertCircle,
  Bell,
  Scale,
  Calendar,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Entelwork Case Study - Modern Leave & Workforce Management Platform",
  description:
    "An in-depth case study of Entelwork: a centralized leave management and team availability platform engineered for growing companies and enterprise workforces.",
  alternates: {
    canonical: "https://entelix.co.ke/products/entelwork",
  },
};

const keyMetrics = [
  { value: "85%", label: "HR Admin Time Saved", detail: "Automated balance calculation & zero paper forms" },
  { value: "0", label: "Department Overlap Conflicts", detail: "Real-time calendar visualizer prevents dual absences" },
  { value: "100%", label: "Labor Law Compliance", detail: "Built-in statutory Kenyan Employment Act leave rules" },
  { value: "< 2 hrs", label: "Average Approval Turnaround", detail: "Instant manager alerts via WhatsApp & Email" },
];

const statutoryLeaveTypes = [
  { name: "Annual Leave", entitlement: "21 Working Days", detail: "Statutory 1.75 days accrued per month worked with automatic carry-forward controls." },
  { name: "Sick Leave", entitlement: "30 Days Full / 30 Half Pay", detail: "Requires medical certification upload for absences exceeding 2 consecutive days." },
  { name: "Maternity Leave", entitlement: "3 Months (90 Days)", detail: "Full salary entitlement with zero deduction from annual leave balance." },
  { name: "Paternity Leave", entitlement: "2 Weeks (14 Days)", detail: "Statutory paid leave granted to fathers following childbirth or adoption." },
  { name: "Compassionate Leave", entitlement: "5 to 7 Days", detail: "Special leave granted for bereavement or immediate family emergencies." },
  { name: "Study & Unpaid Leave", entitlement: "Customizable", detail: "Configurable corporate policy models with executive sign-off workflows." },
];

export default function EntelworkCaseStudy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#101926] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0B59ED_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#products"
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                ← Back to Products
              </Link>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B59ED] text-white">
                <CalendarCheck className="w-3.5 h-3.5" />
                Product Case Study
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Production Deployed
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Entelwork: Modern Leave &amp; Workforce Availability Platform
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              A centralized workforce governance platform engineered to eliminate chaotic HR spreadsheets, prevent overlapping employee absences, and enforce strict statutory labor compliance effortlessly.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {keyMetrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#0B59ED]">{m.value}</p>
                  <p className="text-xs font-bold text-white mt-1">{m.label}</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight">{m.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request Live HR Demo
              </Button>
              <Button href="#workflows" variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                View Workflows &amp; Architecture
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Visual Product Showcase / HR Board Mockup */}
      <section className="py-20 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <Badge variant="primary" size="sm">
                User Experience &amp; Design
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101926] tracking-tight">
                Designed for Employee Ease and Executive Transparency
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
                Employees can submit a leave request in 3 clicks from their smartphone. Managers approve or decline instantly with full visibility into who else is out.
              </p>
            </div>

            {/* Interactive Dashboard Mockup */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-2xl p-6 sm:p-8 text-[#101926]">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between pb-5 border-b border-[#E5E7EB] gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B59ED] flex items-center justify-center text-white font-extrabold">
                    EW
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-[#101926]">ENTELWORK ENTERPRISE PORTAL</h3>
                    <p className="text-xs text-[#64748B]">Company: FinTech Solutions Ltd • 142 Active Employees</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    Cycle: 2026 Active
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#0B59ED]/10 text-[#0B59ED] font-bold">
                    Role: HR Director
                  </span>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid md:grid-cols-12 gap-6 pt-6">
                {/* Left: Department Balances & Calendars (7 cols) */}
                <div className="md:col-span-7 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-[#64748B] tracking-wider">
                      Department Leave Accrual Overview
                    </span>
                    <span className="text-xs font-semibold text-[#0B59ED]">Kenyan Labor Act Compliant</span>
                  </div>

                  {/* Balance Cards */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-[#F5F7FA] border border-[#E5E7EB]">
                      <p className="text-xs text-[#64748B] font-medium">Annual Pool</p>
                      <p className="text-xl font-extrabold text-[#101926] mt-0.5">18.5 Days</p>
                      <span className="text-[10px] text-emerald-600 font-semibold">+1.75/mo Accrued</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F5F7FA] border border-[#E5E7EB]">
                      <p className="text-xs text-[#64748B] font-medium">Sick Leave</p>
                      <p className="text-xl font-extrabold text-[#101926] mt-0.5">30 Days</p>
                      <span className="text-[10px] text-slate-500 font-semibold">Available Full Pay</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F5F7FA] border border-[#E5E7EB]">
                      <p className="text-xs text-[#64748B] font-medium">Team On Duty</p>
                      <p className="text-xl font-extrabold text-[#0B59ED] mt-0.5">93.2%</p>
                      <span className="text-[10px] text-[#0B59ED] font-semibold">Capacity Safe</span>
                    </div>
                  </div>

                  {/* Team Availability Timeline */}
                  <div className="p-4 rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-[#101926] flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#0B59ED]" />
                        This Week: Nov 24 – Nov 28
                      </span>
                      <span className="text-[#64748B]">2 Approved Absences</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E5E7EB]">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          <span className="font-semibold text-[#101926]">Sarah O. (Finance)</span>
                        </div>
                        <span className="text-[11px] text-[#64748B]">Annual Leave • Mon – Wed</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E5E7EB]">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="font-semibold text-[#101926]">David M. (Product)</span>
                        </div>
                        <span className="text-[11px] text-[#64748B]">Paternity Leave • Full Week</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Approval Queue (5 cols) */}
                <div className="md:col-span-5 bg-[#F5F7FA] rounded-xl p-5 border border-[#E5E7EB] flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E5E7EB]">
                      <span className="font-bold text-[#101926]">PENDING APPROVALS</span>
                      <span className="px-2 py-0.5 rounded bg-[#0B59ED] text-white text-[10px] font-bold">
                        1 AWAITING
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] space-y-2.5 shadow-xs">
                      <div className="flex justify-between items-start text-xs">
                        <div>
                          <p className="font-bold text-[#101926]">Bravin R.</p>
                          <p className="text-[11px] text-[#64748B]">Lead Fullstack Engineer</p>
                        </div>
                        <span className="text-[10px] font-mono text-[#0B59ED] font-semibold">LEAVE-802</span>
                      </div>

                      <div className="text-xs bg-[#F5F7FA] p-2 rounded border border-gray-100 space-y-1">
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">Type:</span>
                          <span className="font-semibold text-[#101926]">Annual Leave</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">Dates:</span>
                          <span className="font-semibold text-[#101926]">Nov 26 – Nov 28 (3 Days)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">Handover:</span>
                          <span className="font-semibold text-[#101926]">Chris W. (Confirmed)</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button className="py-2 px-3 rounded-lg bg-[#0B59ED] text-white text-xs font-bold hover:bg-blue-700 transition-colors">
                          Approve
                        </button>
                        <button className="py-2 px-3 rounded-lg bg-white border border-[#E5E7EB] text-[#64748B] text-xs font-semibold hover:bg-gray-50 transition-colors">
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E7EB] text-[11px] text-[#64748B] flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Bell className="w-3.5 h-3.5 text-[#0B59ED]" />
                      Auto-alert configured
                    </span>
                    <span className="font-semibold text-[#101926]">WhatsApp &amp; Email</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Problem: Spreadsheets and Email Chains */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <Badge variant="neutral" size="sm">
                The Workforce Challenge
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101926] tracking-tight">
                Why Excel Spreadsheets &amp; Email Chains Fail Growing Companies
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                As organizations grow past 15 people, informal absence management collapses into disputes, uncoordinated team shortages, and legal compliance risks:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="white" padding="lg" className="border-red-200">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926] mb-2">1. Departmental Blackouts</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Two key engineers take leave simultaneously because neither knew the other was off, halting customer deliveries and critical support.
                </p>
              </Card>

              <Card variant="white" padding="lg" className="border-amber-200">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926] mb-2">2. Statutory Compliance Disputes</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Disagreements over accrued annual days or maternity entitlements during employee exits, exposing the business to labor board disputes.
                </p>
              </Card>

              <Card variant="white" padding="lg" className="border-orange-200">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926] mb-2">3. HR Time Drain</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  HR managers spend 10 to 15 hours each month manually calculating carryovers, answering &quot;how many days do I have left?&quot;, and digging through email archives.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* The Engineered Solution & Workflows */}
      <section id="workflows" className="py-20 bg-[#F5F7FA] border-y border-[#E5E7EB]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <Badge variant="primary" size="sm">
                Platform Workflows
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101926] tracking-tight">
                How Entelwork Operates: 4-Tier Automated Governance
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                Entelwork provides structured, transparent workflows that give employees independence while maintaining strict management oversight.
              </p>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Self-Service Request & Handover Tagging",
                  detail:
                    "The employee selects dates, chooses the leave category, reviews their real-time remaining balance, and designates a qualified colleague for operational handover.",
                },
                {
                  step: "02",
                  title: "Instant Line Manager Conflict Check",
                  detail:
                    "The manager receives a WhatsApp & email notification with a 1-click preview. The system automatically highlights any overlapping departmental leaves before signoff.",
                },
                {
                  step: "03",
                  title: "Automated Ledger Deduction & Calendar Sync",
                  detail:
                    "Upon approval, the employee's ledger is automatically deducted, the company-wide calendar is updated, and Google/Outlook calendar events are dispatched.",
                },
                {
                  step: "04",
                  title: "Statutory Reporting & Payroll Export",
                  detail:
                    "At month-end, HR exports a consolidated leave audit report with complete timestamps, doctor notes, and payroll adjustments in one click.",
                },
              ].map((w) => (
                <div key={w.step} className="p-6 rounded-2xl bg-white border border-[#E5E7EB] flex items-start gap-5">
                  <span className="text-2xl font-extrabold text-[#0B59ED] font-mono">{w.step}</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#101926]">{w.title}</h3>
                    <p className="text-sm text-[#64748B] mt-1 leading-relaxed">{w.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Kenyan Statutory Table */}
            <div className="p-8 rounded-2xl bg-[#101926] text-white space-y-6">
              <div>
                <h3 className="text-xl font-bold">Built-In Statutory Entitlement Profiles</h3>
                <p className="text-xs text-slate-400 mt-1">Pre-configured out-of-the-box according to the Kenya Employment Act (Cap. 226)</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {statutoryLeaveTypes.map((st) => (
                  <div key={st.name} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex justify-between items-baseline mb-1">
                      <p className="text-sm font-bold text-white">{st.name}</p>
                      <span className="text-xs font-mono font-semibold text-[#0B59ED]">{st.entitlement}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{st.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#101926] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="neutral" size="sm" className="bg-white/10 text-white border-none">
              Streamline Your Workforce
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade from Spreadsheets to Entelwork?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule a demonstration to see how Entelwork can be tailored to your organization&apos;s specific leave policies and organizational hierarchy.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Book an HR Platform Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

