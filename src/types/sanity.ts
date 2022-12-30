interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Hero extends SanityBody {
  _type: "hero";
  backgroundInfo: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  image: Image;
}

export interface Social extends SanityBody {
  _type: "social";
  className: string;
  label: string;
  url: string;
  title: string;
}
