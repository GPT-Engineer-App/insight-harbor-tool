import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CompanyMetrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{metrics.employees.toLocaleString()}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Offices</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{metrics.offices}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Founded</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{metrics.founded}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyMetrics;
