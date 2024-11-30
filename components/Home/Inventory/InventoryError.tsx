import { Button } from "@/components/ui/button";

export default function InventoryError({ error }: { error: Error }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="text-red-500 mb-4">⚠️</div>
        <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
        <p className="text-gray-400 mb-4">{error.message}</p>
        <Button 
          onClick={() => window.location.reload()}
          variant="outline"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
} 