import Property from '@/models/Property';
import { savePhotosS3 } from '../photos/savePhotos';
import connectToDatabase from '../db/dbConnection';
import { sanitizePropertyData } from '../utils';
import { buildQueryFromSearchParams } from './queryBulider';


export async function createProperty(data,photos) {
    await connectToDatabase();
    const photoUrls = await savePhotosS3(photos);

    const sanitizPropertyeData = sanitizePropertyData(data,photoUrls);  
    console.log("Sanitize",sanitizPropertyeData);
    const property = new Property(sanitizPropertyeData);   
    const results = await property.save();

    console.log("results",results)

  return results ;
}



export async function getAllProperties() {
  await connectToDatabase();

  try {
    const properties = await Property.find();
    return properties;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw new Error('Failed to fetch properties');
  }
}

export async function deleteProperty(propertyId) {
  await connectToDatabase();

  try {
    const deleted = await Property.findOneAndDelete({ propertyId });

    if (!deleted) {
      throw new Error('Property not found');
    }

    return { message: 'Property deleted successfully', deleted };
  } catch (error) {
    console.error('Error deleting property:', error);
    throw new Error('Failed to delete property');
  }
}

export async function markAsSold(propertyId) {
  await connectToDatabase();

  try {
    const updated = await Property.findOneAndUpdate(
      { propertyId },
      { $set: { status: false } },
      { new: true }
    );

    if (!updated) {
      throw new Error('Property not found');
    }

    return { message: 'Property marked as sold', updated };
  } catch (error) {
    console.error('Error marking property as sold:', error);
    throw new Error('Failed to mark property as sold');
  }
}

export async function getLatestProperties(limit = 6) {
  await connectToDatabase();

  try {
    const properties = await Property.find()
      .sort({ createdAt: -1 })  
      .limit(limit);

    return properties;
  } catch (error) {
    console.error('Error fetching latest properties:', error);
    throw new Error('Failed to fetch latest properties');
  }
}



export async function getPropertyByTitle(title) {
  await connectToDatabase();
  return await Property.findOne({ title });
}


export async function getFilteredProperties(searchParams) {
  const query = buildQueryFromSearchParams(searchParams);
  return Property.find(query).exec();
}
