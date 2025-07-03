export interface Job {
    id: string;
    title: string;
    location: string;
    type: string;
    deadline: string;
    description: string;
    requirements: string[];
    benefits: string[];
    isActive?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    _id?: string;
  }
