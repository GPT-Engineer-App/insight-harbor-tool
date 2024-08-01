import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, BarChart2, Newspaper, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CompanyFinancials from '../components/CompanyFinancials';
import CompanyNews from '../components/CompanyNews';
import CompanyMetrics from '../components/CompanyMetrics';

const fetchCompanyData = async (companyName) => {
  // Simulated API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    name: companyName,
    financials: { revenue: 1000000, profit: 500000, growth: 0.15 },
    news: [
      { id: 1, title: 'Company expands to new markets', date: '2023-04-01' },
      { id: 2, title: 'Quarterly results exceed expectations', date: '2023-03-15' },
    ],
    metrics: { employees: 5000, offices: 20, founded: 2000 },
  };
};

const Index = () => {
  const [companyName, setCompanyName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { data: companyData, isLoading, isError } = useQuery({
    queryKey: ['companyData', searchTerm],
    queryFn: () => fetchCompanyData(searchTerm),
    enabled: !!searchTerm,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(companyName);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Company Research Tool</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <Input
          type="text"
          placeholder="Enter company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </form>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching company data</p>}

      {companyData && (
        <Tabs defaultValue="financials" className="w-full">
          <TabsList>
            <TabsTrigger value="financials">
              <BarChart2 className="mr-2 h-4 w-4" /> Financials
            </TabsTrigger>
            <TabsTrigger value="news">
              <Newspaper className="mr-2 h-4 w-4" /> News
            </TabsTrigger>
            <TabsTrigger value="metrics">
              <TrendingUp className="mr-2 h-4 w-4" /> Key Metrics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="financials">
            <Card>
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <CompanyFinancials data={companyData.financials} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="news">
            <Card>
              <CardHeader>
                <CardTitle>Latest News</CardTitle>
              </CardHeader>
              <CardContent>
                <CompanyNews news={companyData.news} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="metrics">
            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <CompanyMetrics metrics={companyData.metrics} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default Index;
