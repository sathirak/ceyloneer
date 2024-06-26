-- Drop table if it exists
DROP TABLE IF EXISTS front_articles;

-- Create new table with auto-incrementing id
CREATE TABLE front_articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    excerpt TEXT,
    link VARCHAR(255),
    imageUrl VARCHAR(255),
    altText VARCHAR(255)
);

-- Insert data into the table
INSERT INTO front_articles (title, excerpt, link, imageUrl, altText)
VALUES 
    ('The Art of Cooking Pasta', 'Discover the secrets to making perfect pasta dishes.', 'https://example.com/pasta', 'https://picsum.photos/200/100?random=1', 'Delicious pasta dish with fresh ingredients.'),
    ('Exploring the Wonders of Nature', 'Embark on a journey through breathtaking natural landscapes.', 'https://example.com/nature', 'https://picsum.photos/200/100?random=2', 'Magnificent views of mountains and forests.'),
    ('The Ultimate Guide to Fitness', 'Achieve your fitness goals with expert advice and workouts.', 'https://example.com/fitness', 'https://picsum.photos/200/100?random=3', 'Get in shape and stay healthy with effective exercises.'),
    ('Unlocking the Secrets of Meditation', 'Experience inner peace and mindfulness through meditation practices.', 'https://example.com/meditation', 'https://picsum.photos/200/100?random=4', 'Find tranquility and clarity of mind through regular meditation.'),
    ('Mastering the Art of Photography', 'Capture stunning moments with professional photography techniques.', 'https://example.com/photography', 'https://picsum.photos/200/100?random=5', 'Create beautiful images that tell captivating stories.'),
    ('The World of Adventure Travel', 'Embark on thrilling adventures to exotic destinations around the globe.', 'https://example.com/adventure-travel', 'https://picsum.photos/200/100?random=6', 'Experience adrenaline-pumping activities in breathtaking locations.'),
    ('Exploring the Rich History of Ancient Civilizations', 'Journey through time to uncover the mysteries of ancient cultures.', 'https://example.com/history', 'https://picsum.photos/200/100?random=7', 'Discover fascinating insights into the lives of our ancestors.'),
    ('The Science of Sustainable Living', 'Learn practical tips for living an eco-friendly lifestyle.', 'https://example.com/sustainability', 'https://picsum.photos/200/100?random=8', 'Reduce your carbon footprint and protect the planet for future generations.'),
    ('Healthy Eating Habits for a Balanced Life', 'Discover nutritious recipes and dietary habits for optimal health.', 'https://example.com/healthy-eating', 'https://picsum.photos/200/100?random=9', 'Fuel your body with wholesome foods and enjoy a vibrant lifestyle.'),
    ('The Art of Interior Design', 'Transform your living space into a stylish and functional sanctuary.', 'https://example.com/interior-design', 'https://picsum.photos/200/100?random=10', 'Create harmonious interiors that reflect your personal taste and lifestyle.');
