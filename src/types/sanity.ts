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

export interface About extends SanityBody {
  _type: "about";
  backgroundInfo: string;
  techTitle: string;
}

export interface tech extends SanityBody {
  _type: "tech";
  title: string;
  html: string;
}

export interface CommonTech extends SanityBody {
  _type: "commonTech";
  title: string;
  url: string;
  html: string;
  className: string;
  animationDuration: number;
}
