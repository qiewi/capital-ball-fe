import { 
  Star, 
  TrendingUp, 
  Users, 
  BarChart3, 
  PieChart, 
  DollarSign,
  Activity,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PieChart className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Capital Ball</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost">Dashboard</Button>
            <Button variant="ghost">Analytics</Button>
            <Button variant="ghost">Settings</Button>
            <ThemeToggle />
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            Capital Market Consultation Platform
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Professional financial advisory services built with modern technology stack
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="gap-2">
              <TrendingUp className="h-5 w-5" />
              Start Trading
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <BarChart3 className="h-5 w-5" />
              View Analytics
            </Button>
          </div>
        </div>

        {/* Tech Stack Banner */}
        <div className="bg-card border rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">Built with Modern Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Bun Runtime</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Next.js 15</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">TypeScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <PieChart className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Tailwind v4</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium">Shadcn UI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-500" />
                Portfolio Management
              </CardTitle>
              <CardDescription>
                Advanced portfolio tracking and analysis tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Real-time portfolio monitoring with comprehensive analytics and risk assessment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                Market Analytics
              </CardTitle>
              <CardDescription>
                Professional market research and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access to professional-grade market analysis and trading recommendations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                Expert Consultation
              </CardTitle>
              <CardDescription>
                Connect with certified financial advisors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                One-on-one sessions with experienced financial professionals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-orange-500" />
                Risk Assessment
              </CardTitle>
              <CardDescription>
                Comprehensive risk analysis tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Advanced algorithms to assess and manage investment risks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-red-500" />
                Real-time Data
              </CardTitle>
              <CardDescription>
                Live market data and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Stay updated with real-time market movements and news.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUpRight className="h-5 w-5 text-teal-500" />
                Performance Tracking
              </CardTitle>
              <CardDescription>
                Detailed performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Track your investment performance with detailed reports and insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <PieChart className="h-6 w-6 text-primary" />
              <span className="font-semibold">Capital Ball</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Capital Ball. Built with Next.js 15, TypeScript, Tailwind CSS v4, and Shadcn UI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
