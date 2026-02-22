export function BottomSpacer() {
  return (
    <>
      <div className="h-16" />

      <div className="absolute bottom-0 flex h-16 w-full justify-center">
        <div className="absolute top-0 h-0.5 w-full border-t" />

        <div className="bg-border ml-px w-px" />

        <div className="absolute bottom-0 h-0.5 w-full border-b" />
      </div>
    </>
  );
}
