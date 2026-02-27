export function useWorkspaces() {
  const workspaces = [
    {
      id: 1,
      name: "Acme Inc",
      slug: "acme-inc",
      plan: "advanced",
      logo: "",
    },
    {
      id: 2,
      name: "Satrio Inc",
      slug: "satrio-inc",
      plan: "business",
      logo: "",
    },
  ];

  return {
    workspaces,
  };
}
