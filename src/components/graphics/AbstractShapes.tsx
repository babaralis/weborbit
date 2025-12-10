export function AbstractShapes({ variant: _variant = "hero" }: { variant?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Abstract shapes background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </div>
  );
}

