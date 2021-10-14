const pathsSkeleton = [
    { params: { filter: 'featured' } },
    { params: { filter: 'new' } },
    { params: { filter: 'most-rated' } },
    { params: { filter: 'spring' } },
    { params: { filter: 'summer' } },
    { params: { filter: 'autumn' } },
    { params: { filter: 'winter' } },
    { params: { filter: 'nike' } },
    { params: { filter: 'adidas' } },
    { params: { filter: 'puma' } },
    { params: { filter: 'training' } },
    { params: { filter: 'outdoor' } },
    { params: { filter: 'street' } },
]

export const menPaths = [
    ...pathsSkeleton
]

export const womenPaths = [
    ...pathsSkeleton,
    { params: { filter: 'women-love' } }
]