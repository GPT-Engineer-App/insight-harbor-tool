import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CompanyNews = ({ news }) => {
  return (
    <div className="space-y-4">
      {news.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">{item.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CompanyNews;
